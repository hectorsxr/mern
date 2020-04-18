'use strict';

const express = require('express');
const handle = require('../handlers');

const app = express();
const port = 2000;

app.get('/', (req, res) => res.json({ hello: 'hello world' }));
app.use(handle.notFound);
app.use(handle.errors);
app.listen(port, console.log(`Server started on port ${port}`));