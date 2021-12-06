//дава ни уникални Id 
const uniqid = require('uniqid');
const Cube = require('../models/Cube.js')
const productData = require('../data/productData.js');
 
function getAll(query) {
    let products = productData.getAll();

    if(query.search) {
        products = products.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if(query.from){
        products = products.filter(x => Number(x.level) >=  query.from)
    }

    if(query.to){
        products = products.filter(x => Number(x.level) <=  query.to)
    }

    return products;
}

function getOne(id){
    return productData.getOne(id)
}

//Неговата работа е да създаде модела 
function create(data){
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel
    );
     
    //fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productData), callback);

    // ще върне промис
    return productData.create(cube)
}

module.exports = {
    create,
    getAll,
    getOne
}