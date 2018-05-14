import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Platform } from 'support/Snowflake'

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
  }
`

export type PlatformProps = {
  readonly platforms: Platform[]
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
const asPlatformArray = (gqlData: any): Platform[] => {
  const platformArray = gqlData.platformInfos.items.map(platformData => ({
    PlatformID: platformData.platformID,
    FriendlyName: platformData.friendlyName,
    MaximumInputs: platformData.maximumInputs,
    FileTypes: toFileTypesMapping(platformData.fileType),
    Metadata: toMetadataMapping(platformData.metadata)
  }))
  return platformArray
}

const withPlatforms = <TProps extends {}>(
  UnwrappedComponent: React.ComponentType<TProps & PlatformProps>
): React.ComponentClass<TProps> =>
  class WithPlatforms extends React.Component<TProps & PlatformProps> {
    render() {
      return (
        <Query query={QUERY_PLATFORMS}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>
            }
            if (error) {
              return <p>Error :( </p>
            }
            const platformData = asPlatformArray(data)
            return <UnwrappedComponent {...this.props} platforms={platformData} />
          }}
        </Query>
      ) 
    }
  }
export default withPlatforms
