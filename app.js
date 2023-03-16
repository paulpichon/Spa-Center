//express
const express = require('express');
//partials/handlebars
const hbs = require('hbs');

//express
const app = express();
//puerto
const port = process.env.PORT;

//partials/handlebars
//aqui le decimos que en la carpeta views/partials estan nuestros pedazos de codigo
hbs.registerPartials(__dirname + '/views/partials');

//handlebars hbs
app.set('view engine', 'hbs');

//middlware
//static files
app.use(express.static('public'));

//index
app.get('/', ( req, res) => {
    res.render('index');
});
//about
app.get('/about', ( req, res) => {
    res.render('about');
});
//appointment
app.get('/appointment', ( req, res) => {
    res.render('appointment');
});
//contact
app.get('/contact', ( req, res) => {
    res.render('contact');
});
//opening
app.get('/opening', ( req, res) => {
    res.render('opening');
});
//price
app.get('/price', ( req, res) => {
    res.render('price');
});
//service
app.get('/service', ( req, res) => {
    res.render('service');
});
//team
app.get('/team', ( req, res) => {
    res.render('team');
});
//testimonial
app.get('/testimonial', ( req, res) => {
    res.render('testimonial');
});
//404 PAGINA NO ENCONTRADA
app.get('*', ( req, res) => {
    res.render('404');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});