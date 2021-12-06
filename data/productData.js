const fs = require('fs/promises');
const path = require('path');
const productsDb = require('../config/products.json'); 

//productData неговата цел е да контролира само достъпа до данните записването и взимането на данните 
module.exports = {

    getAll() {
        return productsDb;
    },

    getOne(id) {
        return productsDb.find(x => x.id == id);
    },

    create(product) {
        productsDb.push(product);
        return fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsDb))
    }
}