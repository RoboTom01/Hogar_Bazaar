const { Item } = require('../../models');

const item_data = [
    {
        "name": "Bike",
        "description": "A bike",
        "price": 100.00,
        "picture_url": "https://images.unsplash.com/photo-1593642532972-7d8a1d4b8f0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        "name": "Car",
        "description": "A car",
        "price": 10000.00,
        "picture_url": "https://images.unsplash.com/photo-1593642532972-7d8a1d4b8f0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        "name": "Boat",
        "description": "A boat",
        "price": 100000.00,
        "picture_url": "https://images.unsplash.com/photo-1593642532972-7d8a1d4b8f0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
]

const seedItems = () => Item.bulkCreate(item_data);

module.exports = seedItems;