const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  })
);
app.set('view engine', '.hbs');

// Middlewares
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());



// Global variables
// app.use((req, res, next) => {
//   app.locals.message = req.flash('message');
//   app.locals.success = req.flash('success');
//   app.locals.user = req.user;
//   next();
// });

// Routes
// app.use(require('./routes/index'));
// app.use(require('./routes/ambulance'));
// app.use('/user', require('./routes/user'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting
app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});