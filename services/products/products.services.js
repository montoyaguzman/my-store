const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsServices {

    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        const size = 100;
        for(let i = 0; i <= size; i++) {
            let visible = (i % 2 === 0);
            const item = {
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                isVisible: faker.datatype.boolean(),
            }
            this.products.push(item);
        }
    }

    create(product) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...product
        }
        this.products.push(newProduct);
        return newProduct;
    }

    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products)
            }, 2000);
        })
    }

    findOne(id){
        const a = getTotal();
        return this.products.find(item => item.id === id);
    }

    updatePartial(id, changes) {
        const index = this.products.findIndex(item => item.id === id)
        if(index === -1) {
            throw new Error('product not found')
        }
        const product = this.products[index];
        this.products[index] = { ...product, ...changes};
        return this.products[index];
    }

    delete(id) {
        const index = this.products.findIndex(item => item.id === id)
        if(index === -1) {
            throw boom.notFound('product not found');
        }
        if(!this.products[index].isVisible) {
            throw boom.forbidden('forbidden product');
        }
        this.products.splice(index, 1);
        return id;
    }

}

module.exports = ProductsServices;