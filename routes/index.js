const dummyRoutes = require('./dummyes/dummyes.router');
const userRoutes = require('./users/users.router');
const productsRoutes = require('./products/products.router');

function routerApi(app) {
    app.use('/dummyes', dummyRoutes);
    app.use('/users', userRoutes);
    app.use('/products', productsRoutes);
}

module.exports = routerApi;