const router = require('express').Router();
const countdown = require('countdown');
const withAuth = require('../utils/auth');
const { Item, Category } = require('../models');

router.get("/:id", withAuth, async (req, res) => {
    const categoryData = await Category.findByPk(req.params.id);
    const category = categoryData.get({ plain: true });

    const itemData = await Item.findAll({
        include: [{
            model: Category,
            where: { id: req.params.id }
        }]
    });
    const items = itemData.map((item) => {
        let has_sale = false;
        let remaining = "";
        if (item.sale_price !== null) {
            var sale_end_date = new Date(item.sale_end);
            if(sale_end_date >= new Date()) {
                has_sale = true;

                var remaining_days = countdown(sale_end_date, new Date(), countdown.DAYS).toString();
                var remaining_hours = countdown(sale_end_date, new Date(), countdown.HOURS).toString();
                var remaining_minutes = countdown(sale_end_date, new Date(), countdown.MINUTES).toString();

                if (remaining_days.length > 0) {
                    remaining = remaining_days;
                } else if (remaining_hours.length > 0) {
                    remaining = remaining_hours;
                } else {
                    remaining = remaining_minutes;
                }
            }
        }
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            sale_price: item.sale_price,
            sale_end: item.sale_end,
            picture_url: item.picture_url,
            has_sale: has_sale,
            sale_remaining: remaining,
        }
      });

    const categoriesData = await Category.findAll();
    const categories = categoriesData.map((itemCategory) => itemCategory.get({ plain: true }));

    res.render("category", {
        logged_in: req.session.logged_in,
        categories: categories,
        category: category,
        items: items,
        style: "homepage.css",
    });
});


module.exports = router;
