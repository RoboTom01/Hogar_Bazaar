
const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Category } = require('../models');


router.get("/", withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    const categories = categoryData.map((itemCategory) => itemCategory.get({ plain: true }));
    res.render("homepage", {
      logged_in: req.session.logged_in,
      categories: categories,
      style: "homepage.css",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/postItem", withAuth, async (req, res) => {
  try {
    res.render("create-items", {
      logged_in: req.session.logged_in,
      style: "",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    style: "login.css",
  });
});

module.exports = router;
