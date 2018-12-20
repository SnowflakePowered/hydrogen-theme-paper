import React from 'react'
import { Game } from 'support/Snowflake'

interface GameDetailsPageProps {
    game: Game
}
class GameDetailsPage extends React.Component<GameDetailsPageProps> {
    render () {
        return (
            <div>
                {this.props.game.Title}
                {this.props.game.Metadata}
            
            </div>
        )
    }
}

export default GameDetailsPage