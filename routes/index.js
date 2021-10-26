const express = require('express');

const dummyRoutes = require('./dummyes/dummyes.router');
const userRoutes = require('./users/users.router');
const productsRoutes = require('./products/products.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/dummyes', dummyRoutes);
    app.use('/api/v1', router);
    router.use('/users', userRoutes);
    router.use('/products', productsRoutes);
}

module.exports = routerApi;