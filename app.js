const express = require("express");
const bodyParser = require("body-parser");
const { redirect } = require("express/lib/response");
// const { day } = require("/index.html");

const date = require(__dirname + "/index.js");

const app = express();

// app.use('views',path.join(__dirname, 'views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

let items = ["lorem lhsbcdsbcbdshbchdbshcbdskhckhdshcbdskhchd shc hds c sdh cshd chsdclh sdlhchdbclhsdhcd"];
app.use(bodyParser.urlencoded({extended : true}));
app.get("/", (req, res) => {
    let todayDate = date.date();
    res.render("js", {today : todayDate, newItems : items});
});

app.post("/", (req,res) => {
    let newtext = req.body.submit;
   if(req.body.submit === "")
   {
       console.log("write something!");
   } 
   else if(req.body.submit === " ")
   {
       console.log("There a whitespace, Enter the valid input!!");
   }
   else if(req.body.submit === "  ")
   {
       console.log("There a two whitespace, Enter the valid input!!");
   }
   else{
    items.push(newtext);
    res.redirect("/");
   }
});

app.get("/aboutus", (req,res) => {
     res.render("aboutus");
});

app.get("/contact", (req,res) => {
    res.render("contact");
});

app.listen(process.env.PORT || 3000, () => { console.log("Server is running on port 3000!!!")});