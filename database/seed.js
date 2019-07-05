const Model = require('./model.js');

const chairs = [
    {
        "name": "test",
        "category": "chair",
        "url": "http://www.test.com/",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "test",
        "category": "chair",
        "url": "http://www.test.com/",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "test",
        "category": "chair",
        "url": "http://www.test.com/",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "test",
        "category": "chair",
        "url": "http://www.test.com/",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "test",
        "category": "chair",
        "url": "http://www.test.com/",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "test",
        "category": "chair",
        "url": "http://www.test.com/",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "test",
        "category": "chair",
        "url": "http://www.test.com/",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "test",
        "category": "chair",
        "url": "http://www.test.com/",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "test",
        "category": "chair",
        "url": "http://www.test.com/",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "test",
        "category": "chair",
        "url": "http://www.test.com/",
        "max_price": 1,
        "min_price": 0
    },
];




Model.Chairs
    .bulkCreate(chairs)
    .then( result => {
        if(result[1] === false){
            console.log('Already existed in the database');
        }else{
            console.log('Successfully added to database');
        }
    })
    .catch( err => console.error('Issue seeding Users Table', err));
