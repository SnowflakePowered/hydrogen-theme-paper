import * as React from 'react'
import injectSheet, { StyleProps } from 'support/InjectSheet'
import { dimensions } from 'components/GameCard/GameCard.style'
import { styles } from './GameCardGrid.style'
import { CellMeasurerCache, CellMeasurer, AutoSizer, Grid } from 'react-virtualized'

type GameCardGridProps = {
  portrait?: boolean,
  landscape?: boolean,
  square?: boolean,
  header?: React.ReactNode
}

type GameCardGridState = {
  scrollElement?: HTMLElement | null,
  heightCache: CellMeasurerCache
}

const padding = 24

const getDimensions = (portrait, landscape, square) => {
  let dimensionObject;
  if (portrait) {
    dimensionObject = dimensions.portrait
  } else if (landscape) {
    dimensionObject = dimensions.landscape
  } else if (square) {
    dimensionObject = dimensions.square
  } else {
    dimensionObject = dimensions.portrait
  }

  return { 
    BOX_HEIGHT: dimensionObject.height + dimensions.contentHeight + padding,
    BOX_WIDTH: dimensionObject.width + padding }
}

class GameCardGrid extends React.PureComponent<GameCardGridProps & StyleProps, GameCardGridState> {
  constructor (props: GameCardGridProps & StyleProps) {
    super(props)
    this.state = {
      heightCache: new CellMeasurerCache({
        defaultWidth: 100,
        fixedHeight: true,
        minWidth: 100,
        defaultHeight: 300,
        minHeight: 250
      })
    }
  }

  cellRenderer = ({ className, children, numberOfRows, numberOfColumns, cache }: {
    className: string,
    children: React.ReactChild[],
    numberOfRows: number,
    numberOfColumns: number,
    cache: CellMeasurerCache
  }) => 
    ({ columnIndex, key, parent, rowIndex, style }) => {
    const content = children[rowIndex * numberOfColumns + columnIndex]
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        <div
          style={{
            ...style,
            height: 35,
            whiteSpace: 'nowrap',
            padding: 10
          }}
        >
          {content}
        </div>
      </CellMeasurer>
    );
  }

  render () {
    const { BOX_WIDTH } = getDimensions(this.props.portrait, this.props.landscape, this.props.square)
    const children = React.Children.toArray(this.props.children)
    return (
      <AutoSizer>
      {({ height, width }) => {
          const numberOfColumns = Math.floor(width / BOX_WIDTH)
          const numberOfRows = Math.ceil(children.length / numberOfColumns)
          const cellRender = this.cellRenderer({
                                    className: this.props.classes.cellWrapper,
                                    children: children,
                                    numberOfRows,
                                    numberOfColumns,
                                    cache: this.state.heightCache
                                  })
          return (
          <Grid
            height={height}
            width={width}
            columnWidth={this.state.heightCache.columnWidth}
            deferredMeasurementCache={this.state.heightCache}
            cellRenderer={cellRender}
            columnCount={numberOfColumns}
            rowCount={numberOfRows}
            rowHeight={this.state.heightCache.rowHeight}
          />
        )}}
    </AutoSizer>
    )
  }
}

export default injectSheet(styles)(GameCardGrid)
