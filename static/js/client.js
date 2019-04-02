//Document loaded
$(document).ready(function(){
    console.log("im ready");
    
    //Get list of all recipies
    $('#allRecipes-btn').click(function(){
        $.ajax({
            url: "/recipe-list",
            type: "GET",
            dataType: "json",
            data: {format: "json-list"},
            success: function(data){
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++){
                    htmlStr += "<li><div class=\"recipe-btn\">" + data[i] + "</div></li>";
                }
                htmlStr += "</ul>";
                $("#allRecipesDiv").html(htmlStr);
//                $("#allRecipesDiv").html("All recipes: " + data);
                console.log("SUCCESS:", data);
                //Show individual recipes
                $('.recipe-btn').click(function(){
//                    e.preventDefault();
                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            console.log("SUCCESS2:", data);
                        }
                    });
                });
            }
        });
    });
    
    function showImage(){
        console.log("function worked");
    }
    
    
});

