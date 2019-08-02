const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs')
// app.use(express.static(__dirname + '/licks'));

hbs.registerHelper('getCurrentYear', ()=> {
  return new Date().getFullYear()
})

app.get('/', (req, res) => {
  res.render('home.hbs')
  });

app.get('/countrylick', (req, res) => {
  var pdf = 'Country Lick.pdf';
  fs.readFile(pdf, function (err,data){
    res.contentType("application/pdf");
    res.send(data);
  })
});

app.listen(port, () => {
  console.log(`you are on port ${port}`);
})
