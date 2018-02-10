import * as React from 'react'
import gql from 'graphql-tag'
import graphql from 'react-apollo/graphql'
import { ChildProps } from 'react-apollo/types'

export const GAME_QUERY = gql`
query GameQuery {
    games {
      items {
        guid
      }
    }
  }
`

const withGames = graphql<Response>(GAME_QUERY)
// tslint:disable-next-line:no-any
class GameGridView extends React.Component<ChildProps<{}, Response>> {
    render () {
        // tslint:disable-next-line:no-console
        if (this.props.data!.loading) {
            return <div>Loading...</div>
        } else {
            // tslint:disable-next-line:no-string-literal
            return <div>{this.props.data!['games'].items[0].guid}</div>
        }
    }
}

export default withGames(GameGridView)