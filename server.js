const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const DatabaseHandler = require("./db/handler");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const init = async () => {
<<<<<<< HEAD


  // const db_handler = new DatabaseHandler()
=======
  // const db_handler = new DatabaseHandler();
>>>>>>> de4f1c36cd66b7a3ee17a3f81743fcdd37f2f1c3
  // await db_handler.init();
  // db_handler.seed_db();

  //UNCOMMENT THIS STUFF TO SEED THE DATABASE ALSO SET LINE 40 TO TRUE AND THEN RUN USING NODE SERVER.JS


  const app = express();
  const hbs = exphbs.create({ helpers });
  const sess = {
    secret: "Super secret secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  app.use(session(sess));

  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "public")));

  app.use(routes);

    // set to true for seeding
  sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT || 3001, () => console.log("Now listening"));
  });
};

init();
