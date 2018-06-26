import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Platform } from 'support/Snowflake'
import { ConsistentWith, Omit } from 'remoting/typings'

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

const asPlatformMapping = (
  // tslint:disable-next-line:no-any
  gqlData: any
): { [platformId: string]: Platform } => {
  const platformMapping = gqlData.platformInfos.items
    .map(platformData => ({
      PlatformID: platformData.platformID,
      FriendlyName: platformData.friendlyName,
      MaximumInputs: platformData.maximumInputs,
      FileTypes: toFileTypesMapping(platformData.fileType),
      Metadata: toMetadataMapping(platformData.metadata)
    }))
    .reduce((mapping, item) => {
      mapping[item.PlatformID] = item
      return mapping
    // tslint:disable-next-line:align
    }, {})
  return platformMapping
}

interface PlatformRenderProps {
  children: (platforms: PlatformProps) => React.ReactNode
}

export class RenderPlatform extends React.Component<PlatformRenderProps> {
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
          const platforms = asPlatformMapping(data)
          const selectedPlatformID = data.state.selectedPlatformID
          const selectedPlatform = selectedPlatformID
            ? platforms[selectedPlatformID]
            : Object.values(platforms)[0]
          return this.props.children({ platforms, selectedPlatform })
        }}
      </Query>
    )
  }
}

export const withPlatforms = <P extends ConsistentWith<P, PlatformProps>>(
  UnwrappedComponent: React.ComponentType<P & PlatformProps>
): React.ComponentType<P> =>
  class WithPlatforms extends React.Component<P> {
    render() {
      return (
        <RenderPlatform>
          {({ selectedPlatform, platforms }) => (
            <UnwrappedComponent
              {...this.props}
              selectedPlatform={selectedPlatform}
              platforms={platforms}
            />
          )}
        </RenderPlatform>
      )
    }
  }

export default RenderPlatform
