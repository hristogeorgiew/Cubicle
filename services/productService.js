//дава ни уникални Id 
const uniqid = require('uniqid');
const fs = require('fs/promises');
const path = require('path');
const Cube = require('../models/Cube.js')
const productData = require('../config/products.json');
 
function getAll(query) {
    let result = productData;

    if(query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if(query.from){
        result = result.filter(x => Number(x.level) >=  query.from)
    }

    if(query.to){
        result = result.filter(x => Number(x.level) <=  query.to)
    }

    return result;
}

function getOne(id){
    return productData.find(x => x.id == id)
}

function create(data, callback){
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel
    );
     
    productData.push(cube);
    //fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productData), callback);

    // ще върне промис
    return fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productData))
}

module.exports = {
    create,
    getAll,
    getOne
}