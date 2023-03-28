const router = require('express').Router();
const { Store } = require('express-session');
const { Item } = require('../../models');


router.get('/', async (req, res) => {
    try {
        console.log(req.session.id);
        console.log(req.session.userId);
        console.log(req.session.username);
        console.log(req.session);
        const dbPostData = await Item.findAll({})
        res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get("/:id", async (req, res) => {
  try {
    const dbPostData = await Item.findByPk(req.params.id);
    if (!dbPostData) {
      res.status(404).json({ message: "No Post with that ID was found!" });
    }
    res.status(200).json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const dbPostData = await Item.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    });

    return res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const dbPostData = await Item.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!dbPostData) {
      res.status(404).json({ message: "No Post with that ID was found!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const dbPostData = await Item.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!dbPostData) {
      res.status(404).json({ message: "No Post with that ID was found!" });
    }
    res.status(200).json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
