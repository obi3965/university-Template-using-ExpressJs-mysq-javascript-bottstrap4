const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dateAndTime = require('date-and-time');

const app = express();

app.use(morgan('dev', {
    
    skip: req => (!req.url.endsWith(".html") && req.url.indexOf('.') > -1)
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.use(expressValidator());
app.use(cookieParser());

//now we should set the views engine
app.set('view engine', 'ejs');
//it applies to our server folder which runs all the viwes folder files
app.set('views', './server/views');
app.locals.dateAndTime = require('date-and-time');

require('./server/routes/routes.js')(app);


app.use(express.static('public'));




const port = 6060;
app.listen(port, (error) => {
   if (error) console.log(error);
   console.log('\x1b[35m%s\x1b[0m', '================================================================'); // udskriver en lilla streg i konsol
   console.log('Server is listening on port %s, address: %s', port, 'http://localhost:' + port);
});