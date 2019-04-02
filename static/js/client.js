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
                    var count = i;
                    htmlStr += "<li><div class=\"recipe-btn\" id=\"rec" + count + "\">" + data[i] + "</div></li>";
                }
                htmlStr += "</ul>";
                $("#allRecipesDiv").html(htmlStr);
//                $("#allRecipesDiv").html("All recipes: " + data);
//                console.log("SUCCESS:", data);
                //Show individual recipes
                $('#rec0').click(function(){
                    var selectedID = $(this).attr('id');
                    console.log("clicked that " + selectedID);
//                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
//                            console.log("SUCCESS2:", data);
                        }
                    });
                });
                $('#rec1').click(function(){
                    var selectedID = $(this).attr('id');
                    console.log("clicked that " + selectedID);
//                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image-2",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
//                            console.log("SUCCESS2:", data);
                        }
                    });
                });
                $('#rec2').click(function(){
                    var selectedID = $(this).attr('id');
                    console.log("clicked that " + selectedID);
//                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image-3",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
//                            console.log("SUCCESS2:", data);
                        }
                    });
                });
                $('#rec3').click(function(){
                    var selectedID = $(this).attr('id');
                    console.log("clicked that " + selectedID);
//                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image-4",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
//                            console.log("SUCCESS2:", data);
                        }
                    });
                });
                $('#rec4').click(function(){
                    var selectedID = $(this).attr('id');
                    console.log("clicked that " + selectedID);
//                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image-5",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
//                            console.log("SUCCESS2:", data);
                        }
                    });
                });
                $('#rec5').click(function(){
                    var selectedID = $(this).attr('id');
                    console.log("clicked that " + selectedID);
//                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image-6",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
//                            console.log("SUCCESS2:", data);
                        }
                    });
                });
                $('#rec6').click(function(){
                    var selectedID = $(this).attr('id');
                    console.log("clicked that " + selectedID);
//                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image-7",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
//                            console.log("SUCCESS2:", data);
                        }
                    });
                });
                $('#rec7').click(function(){
                    var selectedID = $(this).attr('id');
                    console.log("clicked that " + selectedID);
//                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image-8",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
//                            console.log("SUCCESS2:", data);
                        }
                    });
                });
                $('#rec8').click(function(){
                    var selectedID = $(this).attr('id');
                    console.log("clicked that " + selectedID);
//                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image-9",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
//                            console.log("SUCCESS2:", data);
                        }
                    });
                });
                $('#rec9').click(function(){
                    var selectedID = $(this).attr('id');
                    console.log("clicked that " + selectedID);
//                    console.log("recipe clicked");
                    $.ajax({
                        url: "/recipe-image-10",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
//                            console.log("SUCCESS2:", data);
                        }
                    });
                });
            }
        });
    });
});

