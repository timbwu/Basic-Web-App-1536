let recipeImg1 = "<img src=\"./images/r1.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg2 = "<img src=\"./images/r2.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg3 = "<img src=\"./images/r3.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg4 = "<img src=\"./images/r4.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg5 = "<img src=\"./images/r5.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg6 = "<img src=\"./images/r6.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg7 = "<img src=\"./images/r7.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg8 = "<img src=\"./images/r8.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg9 = "<img src=\"./images/r9.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg10 = "<img src=\"./images/r10.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";

let recipeNames = ["Three Cheese Blend", "Cornmeal Mozzerella Sticks", "Vegan Pumpkin Alfredo", "Philly Cheesesteak", "Mini Shepherds Pie", "Homemade Coffee Creamer", "Queso Chicken Nachos", "Sriracha Turkey Meatballs", "Grilled Salmon Kabobs", "Top Hot Dog"];

let stepData = {
    'Three Cheese Blend': {steps: ["Step 1: Prepare bowl", "Step 2: Mix parmesan into bowl", "Step 3: Mix asiago into bowl", "Step 4: Mix romano into bowl"]},
    'Cornmeal Mozzeralla Sticks': {steps: ["Step 1: Prepare the Coating", "Step 2: Coat the Mozzarella", "Step 3: Fry", "Step 4: Serve"]},
    'Vegan Pumpkin Alfredo': {steps: ["Step 1: Combine and mix flour and milk", "Step 2: Chop fresh rosemary", "Step 3: Mix", "Step 4: Add flour-milk mixture, lemon juice, and yeast", "Step 5: Mix sauce until thick", "Step 6: Add your favourite pasta"]},
    'Philly Cheesesteak': {steps: ["Step 1: Pre-heat oven to 350 Fahrenheit", "Step 2: Add ground beef, ketchup, mustard, Worcestershire, and spices", "Step 3: Make pasta", "Step 4: Make cheese", "Step 5: Fill pasta shells and cheese up", "Step 6: Bake for 10 to 15 minutes"]},
    'Mini Shepherds Pie': {steps: ["Step 1: Cut potatoes", "Step 2: Cook potatoes for 20 minutes", "Step 3: Mash potatoes in bowl", "Step 4: Cook ground beef, flour, broth, spices for 10 minutes", "Step 6: Add ketchup", "Step 7: Bake with pie dough"]},
    'Homemade Coffee Creamer': {steps: ["Step 1: Mix milk, cream, and honey"]},
    'Queso Chicken Nachos': {steps: ["Step 1: Make the Queso", "Step 2: Layer", "Step 3: Bake", "Step 4: Garnish"]},
    'Sriracha Turkey Meatballs': {steps: ["Step 1: Stir turkey, bread crumbs, spices, and green onions", "Step 2: Form meatballs", "Step 3: Cook meatballs", "Step 4: Make siracha sauce", "Step 5: Combine meatballs and sauce"]},
    'Grilled Salmon Kabobs': {steps: ["Step 1: Preheat your grill to medium-high heat", "Step 2: Skewer salmon cubes", "Step 3: Coat with avacado oil", "Step 4: Sprinkle salt and pepper", "Step 5: Grill for 2 to 3 minutes"]},
    'Top Hot Dog': {steps: ["Step 1: Wrap bacon around hot dog", "Step 2: Grill both sides", "Step 3: Butter and grill hot dog bun", "Step 4: Sprinkle lettuce, avacado, and blue cheese over hot dog", "Step 5: Drizzle with mustard vinaigrette"]}
};

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg1;
  },
  getHTML2: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg2;
  },
  getHTML3: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg3;
  },
  getHTML4: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg4;
  },
  getHTML5: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg5;
  },
  getHTML6: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg6;
  },
  getHTML7: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg7;
  },
  getHTML8: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg8;
  },
  getHTML9: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg9;
  },
  getHTML10: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg10;
  },    
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeNames;
  },
  getJSON2: function () {
      console.log("called: getJSON2");
      // Note: this could be from a DB, for now it's just hard-coded
      return stepData;
  }    
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}