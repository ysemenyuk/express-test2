#! /usr/bin/env node

import app from '../index.js';

const port = 4000;

app().listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
