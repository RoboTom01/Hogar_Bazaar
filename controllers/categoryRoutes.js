const router = require('express').Router();
const countdown = require('countdown');
const withAuth = require('../utils/auth');
const { Item, Category } = require('../models');

router.get("/:id", async (req, res) => {
    const categoryData = await Category.findByPk(req.params.id);
    const category = categoryData.get({ plain: true });

    const itemData = await Item.findAll({
        include: [{
            model: Category,
            where: { id: req.params.id }
        }]
    });
    const items = itemData.map((item) => item.get({ plain: true }));

    res.render("category", {
        logged_in: req.session.logged_in,
        category: category,
        items: items,
        style: "homepage.css",
    });
});


module.exports = router;
