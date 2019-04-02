let recipeImg1 = "<img src=\"./images/r1.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg2 = "<img src=\"./images/r2.jpeg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";
let recipeImg3 = "<img src=\"./images/r3.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">";

let recipeNames = ["Three Cheese Blend", "Sauteed Green Beans", "5 Min Spaghetti"];

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return recipeImg1;
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