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
                    htmlStr += "<li><div class=\"recipe-btn\" id=\"" + data[i] + "\">" + data[i] + "</div></li>";
                }
                htmlStr += "</ul>";
                $("#allRecipesDiv").html(htmlStr);
                
                //Get image and steps of recipe
                $("div[id='Three Cheese Blend']").click(function(){
                    var selectedID = $(this).attr('id');
                    $.ajax({
                        url: "/recipe-image",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            
                            //Getting steps
                            $.ajax({
                                url: "/recipe-steps/" + selectedID,
                                type: "GET",
                                dataType: "json",
                                data: {format: "json-list"},
                                success: function(data){
                                    let htmlStr2 = "<ul>";
                                    for(let i = 0; i < data.steps.length; i++){
                                        htmlStr2 += "<li>" + data.steps[i] + "</li>";
                                    }
                                    htmlStr2 += "</ul>";
                                    $("#own1").html(htmlStr2);
                                }
                            });
                        }
                    });
                });
                
                //Get image and steps of recipe
                $("div[id='Cornmeal Mozzerella Sticks']").click(function(){
                    var selectedID = $(this).attr('id');
                    $.ajax({
                        url: "/recipe-image-2",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            
                            //Getting steps
                            $.ajax({
                                url: "/recipe-steps/" + selectedID,
                                type: "GET",
                                dataType: "json",
                                data: {format: "json-list"},
                                success: function(data){
                                    let htmlStr2 = "<ul>";
                                    for(let i = 0; i < data.steps.length; i++){
                                        htmlStr2 += "<li>" + data.steps[i] + "</li>";
                                    }
                                    htmlStr2 += "</ul>";
                                    $("#own1").html(htmlStr2);
                                }
                            });
                        }
                    });
                });
                
                //Get image and steps of recipe
                $("div[id='Vegan Pumpkin Alfredo']").click(function(){
                    var selectedID = $(this).attr('id');
                    $.ajax({
                        url: "/recipe-image-3",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            
                            //Getting steps
                            $.ajax({
                                url: "/recipe-steps/" + selectedID,
                                type: "GET",
                                dataType: "json",
                                data: {format: "json-list"},
                                success: function(data){
                                    let htmlStr2 = "<ul>";
                                    for(let i = 0; i < data.steps.length; i++){
                                        htmlStr2 += "<li>" + data.steps[i] + "</li>";
                                    }
                                    htmlStr2 += "</ul>";
                                    $("#own1").html(htmlStr2);
                                }
                            });
                        }
                    });
                });
                
                //Get image and steps of recipe
                $("div[id='Philly Cheesesteak']").click(function(){
                    var selectedID = $(this).attr('id');
                    $.ajax({
                        url: "/recipe-image-4",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            
                            //Getting steps
                            $.ajax({
                                url: "/recipe-steps/" + selectedID,
                                type: "GET",
                                dataType: "json",
                                data: {format: "json-list"},
                                success: function(data){
                                    let htmlStr2 = "<ul>";
                                    for(let i = 0; i < data.steps.length; i++){
                                        htmlStr2 += "<li>" + data.steps[i] + "</li>";
                                    }
                                    htmlStr2 += "</ul>";
                                    $("#own1").html(htmlStr2);
                                }
                            });
                        }
                    });
                });
                
                //Get image and steps of recipe
                $("div[id='Mini Sheperds Pie]").click(function(){
                    var selectedID = $(this).attr('id');
                    $.ajax({
                        url: "/recipe-image-5",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            
                            //Getting steps
                            $.ajax({
                                url: "/recipe-steps/" + selectedID,
                                type: "GET",
                                dataType: "json",
                                data: {format: "json-list"},
                                success: function(data){
                                    let htmlStr2 = "<ul>";
                                    for(let i = 0; i < data.steps.length; i++){
                                        htmlStr2 += "<li>" + data.steps[i] + "</li>";
                                    }
                                    htmlStr2 += "</ul>";
                                    $("#own1").html(htmlStr2);
                                }
                            });
                        }
                    });
                });
                
                //Get image and steps of recipe
                $("div[id='Homemade Coffee Creamer']").click(function(){
                    var selectedID = $(this).attr('id');
                    $.ajax({
                        url: "/recipe-image-6",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            
                            //Getting steps
                            $.ajax({
                                url: "/recipe-steps/" + selectedID,
                                type: "GET",
                                dataType: "json",
                                data: {format: "json-list"},
                                success: function(data){
                                    let htmlStr2 = "<ul>";
                                    for(let i = 0; i < data.steps.length; i++){
                                        htmlStr2 += "<li>" + data.steps[i] + "</li>";
                                    }
                                    htmlStr2 += "</ul>";
                                    $("#own1").html(htmlStr2);
                                }
                            });
                        }
                    });
                });
                
                //Get image and steps of recipe
                $("div[id='Queso Chicken Nachos']").click(function(){
                    var selectedID = $(this).attr('id');
                    $.ajax({
                        url: "/recipe-image-7",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            
                            //Getting steps
                            $.ajax({
                                url: "/recipe-steps/" + selectedID,
                                type: "GET",
                                dataType: "json",
                                data: {format: "json-list"},
                                success: function(data){
                                    let htmlStr2 = "<ul>";
                                    for(let i = 0; i < data.steps.length; i++){
                                        htmlStr2 += "<li>" + data.steps[i] + "</li>";
                                    }
                                    htmlStr2 += "</ul>";
                                    $("#own1").html(htmlStr2);
                                }
                            });
                        }
                    });
                });
                
                //Get image and steps of recipe
                $("div[id='Sriracha Turkey Meatballs']").click(function(){
                    var selectedID = $(this).attr('id');
                    $.ajax({
                        url: "/recipe-image-8",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            
                            //Getting steps
                            $.ajax({
                                url: "/recipe-steps/" + selectedID,
                                type: "GET",
                                dataType: "json",
                                data: {format: "json-list"},
                                success: function(data){
                                    let htmlStr2 = "<ul>";
                                    for(let i = 0; i < data.steps.length; i++){
                                        htmlStr2 += "<li>" + data.steps[i] + "</li>";
                                    }
                                    htmlStr2 += "</ul>";
                                    $("#own1").html(htmlStr2);
                                }
                            });
                        }
                    });
                });
                
                //Get image and steps of recipe
                $("div[id='Grilled Salmon Kabobs']").click(function(){
                    var selectedID = $(this).attr('id');
                    $.ajax({
                        url: "/recipe-image-9",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            
                            //Getting steps
                            $.ajax({
                                url: "/recipe-steps/" + selectedID,
                                type: "GET",
                                dataType: "json",
                                data: {format: "json-list"},
                                success: function(data){
                                    let htmlStr2 = "<ul>";
                                    for(let i = 0; i < data.steps.length; i++){
                                        htmlStr2 += "<li>" + data.steps[i] + "</li>";
                                    }
                                    htmlStr2 += "</ul>";
                                    $("#own1").html(htmlStr2);
                                }
                            });
                        }
                    });
                });
                
                //Get image and steps of recipe
                $("div[id='Top Hot Dog']").click(function(){
                    var selectedID = $(this).attr('id');
                    $.ajax({
                        url: "/recipe-image-10",
                        type: "GET",
                        dataType: "html",
                        success: function(data){
                            $("#recipeImg").html(data);
                            
                            //Getting steps
                            $.ajax({
                                url: "/recipe-steps/" + selectedID,
                                type: "GET",
                                dataType: "json",
                                data: {format: "json-list"},
                                success: function(data){
                                    let htmlStr2 = "<ul>";
                                    for(let i = 0; i < data.steps.length; i++){
                                        htmlStr2 += "<li>" + data.steps[i] + "</li>";
                                    }
                                    htmlStr2 += "</ul>";
                                    $("#own1").html(htmlStr2);
                                }
                            });
                        }
                    });
                });
//                $('#rec1').click(function(){
//                    var selectedID = $(this).attr('id');
//                    $.ajax({
//                        url: "/recipe-image-2",
//                        type: "GET",
//                        dataType: "html",
//                        success: function(data){
//                            $("#recipeImg").html(data);
//                        }
//                    });
//                });
//                $('#rec2').click(function(){
//                    var selectedID = $(this).attr('id');
//                    console.log("clicked that " + selectedID);
////                    console.log("recipe clicked");
//                    $.ajax({
//                        url: "/recipe-image-3",
//                        type: "GET",
//                        dataType: "html",
//                        success: function(data){
//                            $("#recipeImg").html(data);
////                            console.log("SUCCESS2:", data);
//                        }
//                    });
//                });
//                $('#rec3').click(function(){
//                    var selectedID = $(this).attr('id');
//                    console.log("clicked that " + selectedID);
////                    console.log("recipe clicked");
//                    $.ajax({
//                        url: "/recipe-image-4",
//                        type: "GET",
//                        dataType: "html",
//                        success: function(data){
//                            $("#recipeImg").html(data);
////                            console.log("SUCCESS2:", data);
//                        }
//                    });
//                });
//                $('#rec4').click(function(){
//                    var selectedID = $(this).attr('id');
//                    console.log("clicked that " + selectedID);
////                    console.log("recipe clicked");
//                    $.ajax({
//                        url: "/recipe-image-5",
//                        type: "GET",
//                        dataType: "html",
//                        success: function(data){
//                            $("#recipeImg").html(data);
////                            console.log("SUCCESS2:", data);
//                        }
//                    });
//                });
//                $('#rec5').click(function(){
//                    var selectedID = $(this).attr('id');
//                    console.log("clicked that " + selectedID);
////                    console.log("recipe clicked");
//                    $.ajax({
//                        url: "/recipe-image-6",
//                        type: "GET",
//                        dataType: "html",
//                        success: function(data){
//                            $("#recipeImg").html(data);
////                            console.log("SUCCESS2:", data);
//                        }
//                    });
//                });
//                $('#rec6').click(function(){
//                    var selectedID = $(this).attr('id');
//                    console.log("clicked that " + selectedID);
////                    console.log("recipe clicked");
//                    $.ajax({
//                        url: "/recipe-image-7",
//                        type: "GET",
//                        dataType: "html",
//                        success: function(data){
//                            $("#recipeImg").html(data);
////                            console.log("SUCCESS2:", data);
//                        }
//                    });
//                });
//                $('#rec7').click(function(){
//                    var selectedID = $(this).attr('id');
//                    console.log("clicked that " + selectedID);
////                    console.log("recipe clicked");
//                    $.ajax({
//                        url: "/recipe-image-8",
//                        type: "GET",
//                        dataType: "html",
//                        success: function(data){
//                            $("#recipeImg").html(data);
////                            console.log("SUCCESS2:", data);
//                        }
//                    });
//                });
//                $('#rec8').click(function(){
//                    var selectedID = $(this).attr('id');
//                    console.log("clicked that " + selectedID);
////                    console.log("recipe clicked");
//                    $.ajax({
//                        url: "/recipe-image-9",
//                        type: "GET",
//                        dataType: "html",
//                        success: function(data){
//                            $("#recipeImg").html(data);
////                            console.log("SUCCESS2:", data);
//                        }
//                    });
//                });
//                $('#rec9').click(function(){
//                    var selectedID = $(this).attr('id');
//                    console.log("clicked that " + selectedID);
////                    console.log("recipe clicked");
//                    $.ajax({
//                        url: "/recipe-image-10",
//                        type: "GET",
//                        dataType: "html",
//                        success: function(data){
//                            $("#recipeImg").html(data);
////                            console.log("SUCCESS2:", data);
//                        }
//                    });
//                });
            }
        });
    });
});

