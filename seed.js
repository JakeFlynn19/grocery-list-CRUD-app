require('./config/database');

const Grocery = require('./models/grocery');

const groceries = [
    {
        item: 'Milk',
        category: 'beverages'
    },
    {
        item: 'Juice',
        category: 'beverages'
    },
    {
        item: 'Coffee',
        category: 'beverages'
    },
    {
        item: 'Koolaid',
        category: 'beverages'
    },
    {
        item: 'Gatoraid',
        category: 'beverages'
    },
];

Grocery.insertMany(groceries, function(err, groceries) {
    console.log(groceries)
});