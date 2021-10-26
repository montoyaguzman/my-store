const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hola mundo!!');
});

router.get('/ruta', (req, res) => {
    res.send('hola desde otra ruta!!');
});

module.exports = router;