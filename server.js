const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const DatabaseHandler = require('./db/handler')
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const init = async () => {

  const db_handler = new DatabaseHandler()
  await db_handler.init();
  db_handler.seed_db();

  const app = express();
  const hbs = exphbs.create({ helpers });
  const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  app.use(session(sess));

  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));

  // const { User } = require('./models');
  // User.truncate()
  // User.createExample()

  app.use(routes);

  sequelize.sync({ force: true }).then(() => {
    app.listen(process.env.PORT || 3001, () => console.log('Now listening'));
  });
}

init()
