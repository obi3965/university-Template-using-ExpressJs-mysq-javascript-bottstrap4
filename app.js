//we should connect our expressJs module from node modules
const express = require('express');

//we should connect our morgan from node modules
const morgan = require('morgan');

//
var bodyParser = require('body-parser')

const app = express();

app.use(morgan('dev', {
    // hvis ALLE requests skal ses i loggen, udkommenter næste linje
    skip: req => (!req.url.endsWith(".html") && req.url.indexOf('.') > -1)
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//now we should set the views engine
app.set('view engine', 'ejs');
//it applies to our server folder which runs all the viwes folder files
app.set('views', './server/views');
app.locals.dateAndTime = require('date-and-time');

require('./server/routes/routes.js')(app);

// we can display everythings which includes in our public folder
app.use(express.static('public'));



// we listen to our server which runs on 5000 port
const port = 6060;
app.listen(port, (error) => {
   if (error) console.log(error);
   console.log('\x1b[35m%s\x1b[0m', '================================================================'); // udskriver en lilla streg i konsol
   console.log('Server is listening on port %s, address: %s', port, 'http://localhost:' + port);
});