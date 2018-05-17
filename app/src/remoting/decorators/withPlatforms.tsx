import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Platform } from 'support/Snowflake'
import { ConsistentWith, Overwrite, Omit } from 'remoting/typings'

const QUERY_PLATFORMS = gql`
  query platforms {
    platformInfos {
      items {
        platformID
        friendlyName
        maximumInputs
        fileType {
          mime
          extension
        }
        metadata {
          key
          value
        }
      }
    }
    state @client {
      selectedPlatformID
    }
  }
`

export type PlatformProps = {
  readonly platforms: { [platformId: string]: Platform }
  readonly selectedPlatform: Platform
}

const toFileTypesMapping = (
  gqlData: Array<{ mime: string; extension: string }>
): { [key: string]: string[] } => {
  const map: { [key: string]: string[] } = {}
  for (const { mime, extension } of gqlData) {
    if (!!!map[mime]) {
      map[mime] = []
    }
    map[mime].push(extension)
  }
  return map
}

const toMetadataMapping = (
  gqlData: Array<{ key: string; value: string }>
): { [key: string]: string } => {
  const map: { [key: string]: string } = {}
  for (const { key, value } of gqlData) {
    map[key] = value
  }
  return map
}

// tslint:disable-next-line:no-any
const asPlatformMapping = (gqlData: any): { [platformId: string]: Platform } => {
  const platformMapping = gqlData.platformInfos.items.map(platformData => ({
    PlatformID: platformData.platformID,
    FriendlyName: platformData.friendlyName,
    MaximumInputs: platformData.maximumInputs,
    FileTypes: toFileTypesMapping(platformData.fileType),
    Metadata: toMetadataMapping(platformData.metadata)
  }))
  .reduce((mapping, item) => {
    mapping[item.PlatformID] = item
    return mapping
  },      {})
  return platformMapping
}

const withPlatforms = <P extends ConsistentWith<P, PlatformProps>>(
  UnwrappedComponent: React.ComponentType<P & PlatformProps>
): React.ComponentType<Omit<P, 'platforms'>> =>
  class WithPlatforms extends React.Component<Omit<P, 'platforms'>> {
    render() {
      return (
        <Query query={QUERY_PLATFORMS}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>
            }
            if (error) {
              return <p>Error: {error.message}</p>
            }
            // tslint:disable-next-line:no-console
            console.log(data)
            const platformData = asPlatformMapping(data)
            const selectedPlatformID = data.state.selectedPlatformID
            const selectedPlatform = selectedPlatformID 
                ? platformData[selectedPlatformID]
                : Object.values(platformData)[0]
            return <UnwrappedComponent {...this.props} platforms={platformData} selectedPlatform={selectedPlatform}/>
          }}
        </Query>
      ) 
    }
  }
export default withPlatforms
