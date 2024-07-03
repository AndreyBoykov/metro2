const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routes/tokensRouter');
const userRouter = require('./routes/userRouter');
const questionRouter = require('./routes/questionRouter');
const categoryRouter = require('./routes/categoryRouter');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/auth', userRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/questions', questionRouter);
app.use('/api/categories', categoryRouter);

module.exports = app;
