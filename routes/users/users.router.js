const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ name: 'jose montoya', age: 28 });
});

router.get('/', (req, res) => {
    const { page, size } = req.query;
    if(page) {
        res.json({page, size})
    } else {
        res.send('parametros obligatorios no informados')
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: 'jose montoya', age: 28 });
});

router.get('/:id/colors/:red', (req, res) => {
    const { id, red } = req.params;
    res.json([ { name: 'rojo' }, { name: 'red' } ]);
});

module.exports = router;