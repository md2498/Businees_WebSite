const express = require('express');
const hbs = require('hbs');
const app = express();
const bodyparser = require("body-parser");
const routes = require('./routes/main');
const path = require('path');
const Slider = require("./models/Slider");
const Services = require("./models/Services");
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const db = require('./database/db');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images'); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

const upload = multer({ dest: 'public/images/gallery' });



app.use('/static', express.static('public'));


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/static', express.static("public"))
app.use('', routes)

app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartial("navbar", "partials/navbar");
hbs.registerPartials("views/partials")



app.listen(process.env.PORT | 5556, () => {
    console.log("---------------------- server start ----------------------")
})