var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/index');
var contatoRouter = require('./src/routes/contato');
var loginRouter = require('./src/routes/login');
var cadastroRouter = require('./src/routes/cadastro');
var postsRouter = require('./src/routes/posts');
var sobreRouter = require('./src/routes/sobre');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contato', contatoRouter);
app.use('/login', loginRouter);
app.use('/cadastro', cadastroRouter);
app.use('/posts', postsRouter);
app.use('/sobre', sobreRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler brasil
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
