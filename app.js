var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const rp = require('request-promise')
var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets',express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// app.get('/apply',(req, res) => {
//     if(process.env.discord_hook){
//         rp({
//             method:'POST',
//             url:process.env.discord_hook,
//             json:true,
//             body:{"username": "atoms bits", "content": `${new Date().toLocaleString()} Someone viewed the application`}
//         })
//     }
//     res.redirect('https://docs.google.com/forms/d/e/1FAIpQLSe5i1Q4RBlnA4aUssX-qIW44asIrHvVSnEIFqfzbjNLw0awJg/viewform')
// })
module.exports = app;
