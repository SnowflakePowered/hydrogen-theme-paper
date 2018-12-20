import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import {
  ConfigurationCollection,
  ConfigurationSection,
  ConfigurationSectionDescriptor,
  ConfigurationDescriptor,
  ConfigurationValue
} from 'support/Snowflake'
import { ConsistentWith, Omit } from 'remoting/typings'

const QUERY_CONFIG = gql`
  query gameConfig(
    $emulatorName: String!
    $gameGuid: Guid!
    $profileName: String!
  ) {
    gameConfiguration(
      emulatorName: $emulatorName
      gameGuid: $gameGuid
      profileName: $profileName
    ) {
      descriptor {
        sectionKeys
      }
      sections {
        descriptor {
          sectionName
          displayName
          description
          options {
            default
            description
            displayName
            flag
            increment
            private
            isPath
            isSelection
            max
            min
            optionKey
            optionName
            simple
            type
          }
        }
        values {
          guid
          id
          optionKey
          value
        }
      }
    }
  }
`

const asConfigurationOptionDescriptor = (
  // tslint:disable-next-line:no-any
  gqlData: any
): ConfigurationDescriptor => {
  return {
    Default: gqlData.default,
    Description: gqlData.description,
    DisplayName: gqlData.displayName,
    Flag: gqlData.flag,
    Increment: gqlData.increment,
    Private: gqlData.private,
    Type:  gqlData.type.toLowerCase(),
    Simple: gqlData.simple,
    OptionKey: gqlData.optionKey,
    Min: gqlData.min,
    Max: gqlData.max
  }
}

const asConfigurationOptionDescriptors = (
  // tslint:disable-next-line:no-any
  gqlData: Array<any>
) => {
  return gqlData.map(o => asConfigurationOptionDescriptor(o))
}

const asConfigurationDescriptor = (
  // tslint:disable-next-line:no-any
  gqlData: any
): ConfigurationSectionDescriptor => {
  return {
    SectionName: gqlData.sectionName,
    DisplayName: gqlData.displayName,
    Description: gqlData.description,
    Options: Array.from(asConfigurationOptionDescriptors(gqlData.options)),
  }
}

const asConfigurationValues = (
  // tslint:disable-next-line:no-any
  gqlData: Array<{guid: string, id: string, optionKey: string, value:  number | boolean | string}>
): ConfigurationValue[] => {
  return gqlData.map(o => {
    return {
      OptionKey: o.optionKey,
      Value: o.value,
      Guid: o.guid
    }
  })
}

const asConfigurationCollection = (
  // tslint:disable-next-line:no-any
  gqlData: any
): ConfigurationCollection => {
  const sections: ConfigurationSection[] = gqlData.gameConfiguration.sections.map(
    section => ({
      Descriptor: asConfigurationDescriptor(section.descriptor),
      Values: asConfigurationValues(section.values)
    })
  )
  
  return sections.reduce((r: ConfigurationCollection, a) => {
    r[a.Descriptor.SectionName] = a
    return r
  },
                         {})
}

export type ConfigProps = {
  readonly collection: ConfigurationCollection
}

interface GameConfigurationProps {
  children: (config: ConfigProps) => React.ReactNode
  emulatorName: string
  gameGuid: string
  profileName: string
}

export class RenderPlatform extends React.Component<GameConfigurationProps> {
  render() {
    return (
      <Query
        query={QUERY_CONFIG}
        variables={{
          emulatorName: this.props.emulatorName,
          gameGuid: this.props.gameGuid,
          profileName: this.props.profileName
        }}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>
          }
          if (error) {
            return <p>Error: {error.message}</p>
          }
          // tslint:disable-next-line:no-console
          console.log(data)
          const collection = asConfigurationCollection(data)
          return this.props.children({ collection })
        }}
      </Query>
    )
  }
}

export default RenderPlatform
