//advance-table.html - vista
//modal.html -referencia
//404.html -Vista
//input.html -referencia
//index.html - vista - views

//vamos a usar las rutas definidas en routes
//assets en public
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const cors = require('cors')
const puerto = process.env.PORT || 3000;
const rutasCategorias = require('./src/routes/categorias-routes-api');

const app = express();
//Vistas dinamicas
app.set('view engine', 'hbs'); //vistas dinamicas
hbs.registerPartials(__dirname + '/views/partials',()=>{});

//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());

// RUTAS para los datos - API - END POINTS 
//Vamos a usar las rutas definidas en routes
app.use(rutasCategorias);
//RUTAS PARA LAS VISTAS
//Rutas - temporales

app.get('/',(req,res)=>{
    res.render('dashboard');
})
//Esta ruta ya funciona
app.get('/categorias',(req,res)=>{
    res.render('categorias');
})

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(puerto,()=>{
    console.log('El servidor esta corriendo en el puerto', puerto);
})