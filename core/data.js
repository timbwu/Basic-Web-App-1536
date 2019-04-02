let recipeImg1 = "<img src=\"./images/r1.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg2 = "<img src=\"./images/r2.jpeg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg3 = "<img src=\"./images/r3.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg4 = "<img src=\"./images/r4.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg5 = "<img src=\"./images/r5.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg6 = "<img src=\"./images/r6.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg7 = "<img src=\"./images/r7.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg8 = "<img src=\"./images/r8.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg9 = "<img src=\"./images/r9.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg10 = "<img src=\"./images/10.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";

let recipeNames = ["Three Cheese Blend", "Sauteed Green Beans", "5 Minute Spaghetti", "Philly Cheesesteak", "Mini Shepherd's Pie", "Homemade Coffee Creamer", "Queso & Chicken Nachos", "Siriracha Turkey Meatballs", "Grilled Salmon Kabobs", "Hot Dog", "Mozzarella Sticks"];

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
  }
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}