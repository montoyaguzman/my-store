const express = require('express');
const router = express.Router();
const faker = require('faker');

router.get('/', (req, res) => {
    const size = req.query.size || 10;
    const items = [];
    for(let i = 0; i <= size; i++) {
        const item = {
            name: faker.commerce.productName(),
            price: faker.commerce.price()
        }
        items.push(item)
    }
    res.json(items);
});

router.get('/filter', (req, res) => {
    res.send('yo soy /filter')
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`enviaste: ${id}`)
});

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    })
});

router.patch('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    res.json({
        message: 'updated',
        id,
        data: body
    })
});

router.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    res.json({
        message: 'updated',
        id,
        data: body
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        message: 'deleted',
        id,
    })
});



module.exports = router;