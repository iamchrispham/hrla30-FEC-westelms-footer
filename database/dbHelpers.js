const Models = require('./model.js');

getChairs = () => {
    return Models.Chairs.findAll({});
}

getChairByID = (id) => {
    return Models.Chairs.findAll({
        where: {
            id: id
        }
    });
}

module.exports = {
    getChairs,
    getChairByID
}