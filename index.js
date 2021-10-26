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
    res.json({ id: 1, name: 'jose montoya' });
});

app.listen(port, () => {
    console.log('ok en puerto: ', port)
});