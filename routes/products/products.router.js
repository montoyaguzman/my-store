const express = require('express');
const router = express.Router();
const ProductsServices = require('../../services/products/products.services');

const serviceProduct = new ProductsServices();

router.get('/', async (req, res) => {
    try {
        const products = await serviceProduct.find();
        res.json(products);
    } catch (error){
        res.status(404).json({
            message: error.message
        });
    }
});

router.get('/filter', (req, res) => {
    res.send('yo soy /filter')
});

router.get('/:id', (req, res, error) => {
    try {
        const { id } = req.params;
        const product = serviceProduct.findOne(id);
        res.json(product);
    } catch (error) {
        next(error);
    }
    
});

router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = serviceProduct.create(body);
    res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const product = serviceProduct.updatePartial(id, body);
    res.json({
        message: 'updated',
        id,
        data: product
    })
});

router.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    res.json({ message: 'updated', id, data: body })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const editedId = serviceProduct.delete(id);
    res.json({ message: 'deleted', editedId, })
});



module.exports = router;