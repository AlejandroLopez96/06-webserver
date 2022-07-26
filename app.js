const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alejandro',
        titulo: 'Curso node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alejandro',
        titulo: 'Curso node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alejandro',
        titulo: 'Curso node'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})