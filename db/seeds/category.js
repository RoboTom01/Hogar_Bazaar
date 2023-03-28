const { Category } = require("../../models")

const category_data = [
    {
        "id": 1,
        "name": "Furniture",
        "thumbnail": "https://www.essentialhome.eu/inspirations/wp-content/uploads/2022/07/INSPIRATIONS-Top-13-Luxury-Home-Decor-Ideas-for-a-High-End-Interior.png"
    },
    {
        "id": 2,
        "name": "Rugs",
        "thumbnail": "https://lirp.cdn-website.com/c7e92829/dms3rep/multi/opt/img003-640w.jpg"
    },
    {
        "id": 3,
        "name": "Office",
        "thumbnail": "https://www.cyruscrafts.com/img/cms/blog/office-decor/office-decor.jpg"
    },
    {
        "id": 4,
        "name": "Outdoor",
        "thumbnail": "https://cdn.mos.cms.futurecdn.net/9JUMy6YeLepGTZf9Tx9vSV.jpg"
    },
    {
        "id": 5,
        "name": "Antique",
        "thumbnail": "https://www.honestlymodern.com/wp-content/uploads/2017/03/Great-Way-to-Include-Antiques-into-Any-Decor-700.jpg"
    },
    {
        "id": 6,
        "name": "Lighting",
        "thumbnail": "https://ae01.alicdn.com/kf/Sdd5f356d00ad42efba48e18b7948ea6fN/Nordic-Ceiling-Chandelier-E27-Led-Minimalist-Pendant-Lights-220V-Hanging-Lamp-For-kitchen-Dining-Living-Room.jpg_Q90.jpg_.webp"
    }
]

const seedCategories = () => Category.bulkCreate(category_data);

module.exports = seedCategories;