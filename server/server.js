require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const ctrl = require("./controller");

const app = express();
const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET,
  NODE_ENV
} = process.env;

app.use(express.json());

massive(CONNECTION_STRING)
  .then((db) => {
  app.set('db', db);
  console.log("DB Set");
  if (NODE_ENV === "development") {
    db.seed([
      '$2a$10$3dKWS521L.WsyIQhSkbU1OB6hnBv4YfSJ2fsFZu.jpp0oCE7HAW.m',
      '$2a$10$QUcRFpItmG5Wwwq9lnMwj.OILXKRJH3sPn1.ZaUYEGyHr5BFVrxLG'
    ]).then(() => {
      console.log("DB Seeded");
    });
  }
  app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));
});

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365
  }
}))

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)