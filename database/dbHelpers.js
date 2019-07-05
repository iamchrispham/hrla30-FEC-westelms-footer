const Models = require('./model.js');

getChairs = () => {
    return Models.Chairs.findAll({});
}

module.exports = {
    getChairs
}