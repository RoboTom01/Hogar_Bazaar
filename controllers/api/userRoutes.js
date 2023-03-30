const router = require('express').Router();
const { User } = require('../../models');
const { v4: uuidv4 } = require('uuid'); // import uuidv4 function from uuid package

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    return res.json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      uuid: uuidv4() // generate and store a UUID for each user
    });
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.logged_in = true;
      req.session.email = user.email;
      req.session.phone = user.phone;
      return res.json(user);
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user === null) {
      res.status(400).json({ message: "Incorrect login credentials" });
      return;
    }
    const validPassword = user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect login credentials" });
      return;
    }
    useremail = req.body.email;
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.logged_in = true;
      req.session.email = user.email;
      req.session.phone = user.email;
      res.status(200).json({ message: "You are now logged in" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

