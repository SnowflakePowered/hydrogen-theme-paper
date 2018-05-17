import React from 'react'
// import { Link as ReactRouterLink, LinkProps } from 'react-router-dom'

const Link: React.SFC<{to: String}> = (props) => {
  return (
    <a
     {...props}
     style={{
        textDecoration: 'none',
        backgroundColor: 'inherit',
        color: 'inherit' 
      }}
    />
  )
}

export default Link
