const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

require('./config/database');

const indexRouter = require('./routes/index');
const groceriesRouter = require('./routes/groceries');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/groceries', groceriesRouter);

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`)
});