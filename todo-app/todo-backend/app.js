const { loadEnvFile } = require('node:process');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

loadEnvFile();

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

const redis = require('./redis')

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/todos', todosRouter);

module.exports = app;
