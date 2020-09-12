// (M) 1. create variables of major sections to use within all javascript

//// (M) 2. get localstorage

// (M) 3. collect all input ingredients
// //  create variables from all input ingredients
// var userInput = document.getElementById('ing0').val;
// $("#submit").click(function(event) {
//     $('#input').val("Ingredient 0");
// })

// $(document).ready(function () { 
//     $(":text")
//     // On button click, get value 
//     // of input control Show alert 
//     // message box 
//     $("#submit").click(function () { 
//         var inputE1 = $("#input0").val(); 
//         alert(inputE1); 
//     }); 
// }); 

// //// (M) 4. set localstorage
// localStorage.setItem('ingredients', JSON.stringify(userIngredients));


// cocktail function to get random suggestion based on previous click
var getDrink = function() {
    var getDrinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    $.getJSON(getDrinkUrl).done(function(data){
        console.log(data);
        $.each(data.drinks, function(index, drink) {
            // getting the random drink name
            var drinkName = drink.strDrink;
            var drinkTextE1 = $("<p>").html("Try this cocktail:<br><br>" + index + drinkName);
            drinkTextE1.appendTo("#drink");
       
            // getting the drink image thumb 
            var drinkImage = drink.strDrinkThumb;
            // probably just need to remove the "0" and it will work
            var drinkTextE2 = $("<img>").html('img src="' + index + drinkImage +'">');
            console.log(drinkImage);
            drinkTextE2.appendTo("#drinkimage");
   
            // getting the recipe for the drink
            var drinkRecipe = drink.strInstructions;
            // probably just need to remove the "0" and it will work
            var drinkTextE3 = $("<p>").html("How to make it:<br><br>" + index + drinkRecipe);
            console.log(drinkRecipe);
            drinkTextE3.appendTo("#drinkrecipe");
        })
    });
};

$("#drinkidea").on('click', getDrink);

// Function to get another cocktail suggestion
var resetDrink = function() {

    // clear content in drink section
    $("#drink").html("");
    $("#drinkimage").html("");
    $("#drinkingredients").html("");
    $("#drinkrecipe").html("");

    // get a new cocktail suggestion
    getDrink(); 
}

$("#resetdrink").on('click', resetDrink);

// (O) 5. create function for getting ingredients data from API
// function getIngredients(){
//     // fetch from spoonacular
//     fetch()
//     .then()

function getIngredients(id){

    $.ajax({
    url: "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=54dabc814050472fb2b3631a332e7a58",
    success:function(data) {
        console.log('success', data);

    }
    });

    //// 6. set localstorage


// (O) 6. display recipe function
    // for loop for ingredients

// (A) 7. run second API for drinks to match with the recipe
    // display on page

// (A) 8. run the display function again based on button