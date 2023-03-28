const { ItemCategory } = require('../../models');

const item_category_data = [
    {
        "item_id": 1,
        "category_id": 1
    },
    {
        "item_id": 2,
        "category_id": 1
    },
    {
        "item_id": 3,
        "category_id": 2
    },
    {
        "item_id": 4,
        "category_id": 3
    },
    {
        "item_id": 5,
        "category_id": 4
    },
    {
        "item_id": 6,
        "category_id": 5
    },
    {
        "item_id": 6,
        "category_id": 6
    },
]

const seed_categories = () => ItemCategory.bulkCreate(item_category_data);

module.exports = seed_categories;


