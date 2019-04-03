//Reference to fake database
const recipes = require('./core/data')

//Require express
const express = require('express');

//Body parser
const bodyParser = require('body-parser');

//Reference to express
const app = express();

//Require file server
const fs = require("fs");

//Listen to browser request
app.listen(3000, function(){
    console.log('listening to port 3000');
});

//Send html document to server
//Browser sends http://localhost:3000/
//Last '/' is the domain
app.get('/', function(req, res){
    let doc = fs.readFileSync('lab8.html', "utf8");
    res.send(doc);
});

app.get('/recipe-image', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let recipeImage = recipes.getHTML();
    res.send(recipeImage);
});

app.get('/recipe-image-2', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let recipeImage = recipes.getHTML2();
    res.send(recipeImage);
});

app.get('/recipe-image-3', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let recipeImage = recipes.getHTML3();
    res.send(recipeImage);
});

app.get('/recipe-image-4', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let recipeImage = recipes.getHTML4();
    res.send(recipeImage);
});

app.get('/recipe-image-5', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let recipeImage = recipes.getHTML5();
    res.send(recipeImage);
});

app.get('/recipe-image-6', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let recipeImage = recipes.getHTML6();
    res.send(recipeImage);
});

app.get('/recipe-image-7', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let recipeImage = recipes.getHTML7();
    res.send(recipeImage);
});

app.get('/recipe-image-8', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let recipeImage = recipes.getHTML8();
    res.send(recipeImage);
});

app.get('/recipe-image-9', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let recipeImage = recipes.getHTML9();
    res.send(recipeImage);
});

app.get('/recipe-image-10', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let recipeImage = recipes.getHTML10();
    res.send(recipeImage);
});

//Handle all recipes in list form
app.get('/recipe-list', function(req, res){
    let formatOfResponse = req.query['format'];
    let dataList = null;
    
    if(formatOfResponse == 'html-list'){
        res.setHeader('Content-Type', 'text/html');
        dataList = recipes.getHTML();
        res.send(dataList);
    }else if(formatOfResponse == 'json-list'){
        res.setHeader('Content-Type', 'application/json');
        dataList = recipes.getJSON();
        res.send(dataList);
    }
})

//Handle recipe step objects in JSON/HTML
app.get('/recipe-steps', function(req, res){
    let formatOfResponse = req.query['format'];
    let dataList = null;
    
    if(formatOfResponse == 'html-list'){
        res.setHeader('Content-Type', 'text/html');
        dataList = recipes.getHTML();
        res.send(dataList);
    }else if(formatOfResponse == 'json-list'){
        res.setHeader('Content-Type', 'application/json');
        dataList = recipes.getJSON2();
        const allRecipes = Object.keys(dataList);
        console.log(allRecipes);
        res.send(allRecipes);
    }
})

//Handle steps for specific recipe
app.get('/recipe-steps/:recipeid', function(req, res){
    const recipeToFind = req.params.recipeid;
    let dataList = recipes.getJSON2();
    const val = dataList[recipeToFind];
    console.log(recipeToFind, '->', val);
    if(val){
        res.send(val);
    }else{
        //Empty obj
        res.send({});
    }
})

//Static files (images, css, js);
app.use('/css', express.static('static/css'));
app.use('/js', express.static('static/js'));
app.use('/images', express.static('static/images'));

//Tracks data from form element and adds to body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/post-form', function(req, res){
    res.setHeader('Content-Type', 'application/json')
    console.log(req.body);
    res.send(["You sent me:", req.body]);
});