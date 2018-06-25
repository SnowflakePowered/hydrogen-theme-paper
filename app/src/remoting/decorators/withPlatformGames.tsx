import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Game } from 'support/Snowflake'
import { ConsistentWith, Omit } from 'remoting/typings'

const QUERY_PLATFORM_GAMES = gql`
query platformGames($platformID: String!) {
	gamesByPlatform(platformId: $platformID) {
    items {
      id,
      guid,
      platformID,
      title,
      files {
        id,
        mimeType,
        filePath,
        guid,
        metadata {
          id,
          key,
          value,
          record
        }
      }
      metadata {
        id,
        key,
        value,
        record
      }
    }
  }
}
`

export type GameCollectionProps = {
  readonly games: Game[]
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
const asFilesArray = (gqlData: any): File[] => {
  const filesArray: File[] = gqlData.map(file => ({
    FilePath: file.filePath,
    Guid: file.guid,
    MimeType: file.mimetype,
    Metadata: toMetadataMapping(file.metadata)
  }))
  return filesArray
}

// tslint:disable-next-line:no-any
const asGamesArray = (gqlData: any): Game[] => {
  const gamesArray: Game[] = gqlData.gamesByPlatform.items.map(gameData => ({
    Guid: gameData.guid,
    PlatformID: gameData.platformID,
    Title: gameData.title,
    Metadata: toMetadataMapping(gameData.metadata),
    Files: asFilesArray(gameData.files)
  }))
  return gamesArray
}

interface PlatformGamesQueryVariables {
  platformID: string
}

const withPlatformGames = (queryData: PlatformGamesQueryVariables) =>
   <P extends ConsistentWith<P, GameCollectionProps>>(
  UnwrappedComponent: React.ComponentType<P & GameCollectionProps>
): React.ComponentType<Omit<P, 'games'>> =>
  class WithPlatformGames extends React.Component<Omit<P, 'games'>> {
    render() {
      return (
        <Query query={QUERY_PLATFORM_GAMES} variables={queryData}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>
            }
            if (error) {
              return <p>Error: {error.message}</p>
            }
            // tslint:disable-next-line:no-console
            console.log(data)
            const gamesData = asGamesArray(data)
            return <UnwrappedComponent {...this.props} games={gamesData}/>
          }}
        </Query>
      ) 
    }
  }

interface PlatformGamesRenderProps {
  platformID: string
  children: (games: GameCollectionProps) => React.ReactNode
}

class RenderPlatformGames extends React.Component<PlatformGamesRenderProps> {
  render () {
    return (
      <Query query={QUERY_PLATFORM_GAMES} variables={{platformID: this.props.platformID}}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>
          }
          if (error) {
            return <p>Error: {error.message}</p>
          }
          // tslint:disable-next-line:no-console
          const gamesData = asGamesArray(data)
          return this.props.children({games: gamesData})
        }}
      </Query>
    ) 
  }
}

export default RenderPlatformGames
