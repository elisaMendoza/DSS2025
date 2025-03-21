
const express = require( 'express');
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.get('/',(request,response)=> {
    return response.render('index.html')
})

app.get('/hello/Elisa', ( request, response )=> {
    response.send( 'Hello World bella')
});
app.listen (3000, ()=>{
    console. log('Listening at localhost: 3000')
})

app.get('/sara', ( request, response )=> {
    response.send( 'Hola Sara')
});

app.get('/showrequestget', ( request, response )=> {
    console.log(request.query)
    return response.send('Mira la consola locaaa')
});
app.post('/showrequestpost', ( request, response )=> {
    console.log(request.body)
    return response.send('Mira la consola loquilla')
});
app.post('/mostrar', ( request, response )=> {
    return response.render('mostrar.html', {
        locals: {
            input1: request.body.input1,
        }
    })
});
app.post('/mostrar', ( request, response )=> {
    return response.render('mostrar.html', {
        locals: {data:request.body}
    })
});