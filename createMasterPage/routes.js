import express from "express";
import bodyParser from "body-parser";
const app = express();
// set the view engine to ejs
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// Load views here  
app.get("/",(req,res)=>{
var title = "Home";
res.render("pages/index",{title:title});
});

app.get("/about",(req,res)=>{
var title = "About";
res.render("pages/about",{title:title});
});

app.get("/products",(req,res)=>{
var title = "products";
res.render("pages/about",{title:title});
});

app.get("/product/:id",(req,res)=>{
var title = "products";
res.render("pages/about",{title:title});
});

app.get("/contact",(req,res)=>{
var title = "Contact Form";
res.render("pages/contact",{title:title,name: req.body.name});
});

app.post("/contact_process",(req,res)=>{ 
    title = "Contact";
    res.render("pages/contact",{title:title,name: req.body.name});
});

app.get("*",(req,res)=>{
res.render("pages/404");
});

// process request data here 

app.listen(5000);