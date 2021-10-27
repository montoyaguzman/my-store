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
    if(id === '999') {
        res.status(404).json({ message: 'not found' })
    } else {
        res.status(200).send(`enviaste: ${id}`);
    }
});

router.post('/', (req, res) => {
    const body = req.body;
    res.status().json({
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