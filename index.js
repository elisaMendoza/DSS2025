
const express = require( 'express');
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.get('/hello/Elisa', ( request, response )=> {
    response.send( 'Hello World bella')
});
app.listen (3000, ()=>{
    console. log('Listening at localhost: 3000')
})

app.get('/sara', ( request, response )=> {
    response.send( 'Hola Sara')
});
    