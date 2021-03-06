import React from 'react'
import injectSheet, { StyleProps } from 'support/InjectSheet'
import { Paper, FormControl, Input } from '@material-ui/core'

import { Search as SearchIcon } from '@material-ui/icons'

import { styles } from './SearchBar.style'
import { SearchBarEvent } from 'support/ComponentEvents/SearchBarEvent'

type SearchBarProps = {
  tagline?: string,
  onSearch?: (e: SearchBarEvent) => void
}

const SearchBar: React.SFC<SearchBarProps & StyleProps> = ({ classes, tagline, onSearch }) => (
  <Paper className={classes.barContainer}>
    <SearchIcon 
      className={classes.searchIcon}
    />
    <FormControl className={classes.input}>
      <Input
          placeholder={'Search ' + (tagline || '')}
          className={classes.textFieldUnderline}
          onChange={(e) => onSearch!({searchQuery: e.target.value})}
      />
    </FormControl>
  </Paper>
)

export default injectSheet(styles)(SearchBar)
