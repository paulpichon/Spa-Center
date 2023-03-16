//express
const express = require('express');
const app = express();

//puerto
const port = 8080;

//middlware
//static files
app.use(express.static('public'))
//about
app.get('/about', ( req, res) => {
    res.sendFile( __dirname + '/public/about.html' );
});
//appointment
app.get('/appointment', ( req, res) => {
    res.sendFile( __dirname + '/public/appointment.html' );
});
//contact
app.get('/contact', ( req, res) => {
    res.sendFile( __dirname + '/public/contact.html' );
});
//opening
app.get('/opening', ( req, res) => {
    res.sendFile( __dirname + '/public/opening.html' );
});
//price
app.get('/price', ( req, res) => {
    res.sendFile( __dirname + '/public/price.html' );
});
//service
app.get('/service', ( req, res) => {
    res.sendFile( __dirname + '/public/service.html' );
});
//team
app.get('/team', ( req, res) => {
    res.sendFile( __dirname + '/public/team.html' );
});
//testimonial
app.get('/testimonial', ( req, res) => {
    res.sendFile( __dirname + '/public/testimonial.html' );
});
//404 PAGINA NO ENCONTRADA
app.get('*', ( req, res) => {
    res.sendFile( __dirname + '/public/404.html' );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});