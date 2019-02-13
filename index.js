var express= require("express");
var app = express();
const bodyParser = require('body-parser')
app.set("views","views");
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:false}))

