import React from 'react';
import { grey } from '@material-ui/core/colors';

const style = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: grey[200]
};

export default function (storyFn) {
  return <div style={style}>{storyFn()}</div>;
}