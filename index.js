const { application } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hola mundo!!');
});

app.get('/ruta', (req, res) => {
    res.send('hola desde otra ruta!!');
});

app.get('/user', (req, res) => {
    res.json({ name: 'jose montoya', age: 28 });
});

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: 'jose montoya', age: 28 });
});

app.get('/user/:id/colors/:red', (req, res) => {
    const { id, red } = req.params;
    res.json([ { name: 'rojo' }, { name: 'red' } ]);
});

app.get('/users', (req, res) => {
    const { page, size } = req.query;
    if(page) {
        res.json({page, size})
    } else {
        res.send('parametros obligatorios no informados')
    }
})

app.listen(port, () => {
    console.log('ok en puerto: ', port)
});