const express =  require('express');
const expressLayouts = require('express-ejs-layouts');

const myApp = express();

myApp.use(express.static('public'));
myApp.set('views', __dirname + '/views');
myApp.set('view engine', 'ejs');
myApp.set('layout', 'layouts/main-layout');
myApp.use(expressLayouts);


myApp.get('/home', (req, res, next) => {
  res.render('home');
});

myApp.get('/about', (req, res, next) => {
  res.render('about');
});

myApp.get('/contactus', (req, res, next) => {
  res.render('contactus');
});

myApp.get('/display-user-info', (req, res, next) => {
  const name = req.query.name;
  const lastName = req.query.lastName;
  const email = req.query.email;

  res.render('display-info', {
    name: name,
    lastName: lastName,
    email: email
  });
});


myApp.listen(3000, () => {
  console.log('Backend app Online!');
});
