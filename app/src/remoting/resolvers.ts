import { Platform } from 'support/Snowflake'
import { Context } from 'react-apollo'
import gql from 'graphql-tag'

type SelectedPlatformVariables = {
    platformID: string
}

export const SET_SELECTED_PLATFORM = gql`
  mutation SetSelectedPlatform($platformID: String!) {
    setSelectedPlatform(platformID: $platformID) @client
  }
`

export default {
    Mutation: {
        setSelectedPlatform: (_, variables: SelectedPlatformVariables, { cache, getCacheKey }: Context) => {
            // tslint:disable-next-line:no-console
            console.log(variables)
            const { platformID } = variables
            cache.writeData({data: { selectedPlatformID: platformID } } )
            return null
        }
    }
}