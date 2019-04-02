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
    'Three Cheeze Blend': {ingredients: '3cheese', steps: '2'},
    'Sauteed Green Beans': {ingredients: 'greenbeans', steps: '3'}
};

//In recipes domain, send fakeDb objects
app.get('/recipes', function(req, res){
    const allRecipes = Object.keys(fakeDb);
    console.log("allRecipes is:", allRecipes);
    res.send(allRecipes);
});

//For specific recipe in recipes to send to browser
//:recipesid is any recipe name, if found print object
app.get('/recipes/:recipeid', function(req, res){
    const recipeToFind = req.params.recipeid;
    const val = fakeDb[recipeToFind];
    console.log(recipeToFind, '->', val);
    if(val){
        res.send(val);
    }else{
        res.send({});
    }
});

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