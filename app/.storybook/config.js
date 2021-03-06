import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  require('../node_modules/material-components-web/dist/material-components-web.min.css');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
