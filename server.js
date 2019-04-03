const recipes = require('./core/data')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require("fs");
                    
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

//Fake database with objects hardcoded
const fakeDb = {
    'Three Cheese Blend': {ingredients: '3cheese', steps: '2'},
    'Sauteed Green Beans': {ingredients: 'greenbeans', steps: '3'}
};

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

////In recipes domain, send fakeDb objects
//app.get('/recipes', function(req, res){
//    const allRecipes = Object.keys(fakeDb);
//    console.log("allRecipes is:", allRecipes);
//    res.send(allRecipes);
//});
//
////For specific recipe in recipes to send to browser
////:recipesid is any recipe name, if found print object
//app.get('/recipes/:recipeid', function(req, res){
//    const recipeToFind = req.params.recipeid;
//    const val = fakeDb[recipeToFind];
//    console.log(recipeToFind, '->', val);
//    if(val){
//        res.send(val);
//    }else{
//        res.send({});
//    }
//});

//Get list of things
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

app.get('/recipe-steps/:recipeid', function(req, res){
    const recipeToFind = req.params.recipeid;
    let dataList = recipes.getJSON2();
    const val = dataList[recipeToFind];
    console.log(recipeToFind, '->', val);
    if(val){
        res.send(val);
    }else{
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