require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT, SESSION_SECRET} = process.env
const session = require("express-session");


app.use(express.json())
app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    })
  );

app.listen(SERVER_PORT, () => console.log(`{SERVER_PORT} maids a milkin`))