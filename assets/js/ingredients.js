// Hidden recipe card and drink card sections on page load
$(document).ready(function() {
    $('#content-container').hide();
});

// create localstorage for upcoming array
var list = JSON.parse(localStorage.getItem('ingredients')) || [];

// +++ WORKING - Help the user see autosuggested ingredients
// var autoSearch = function(){
    var autoUrlE1 = "https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=54dabc814050472fb2b3631a332e7a58&number=10&";
    var autoUrlE2 = "query=ap";
    // var autoUrlE3 = $('#input0').charAt(2).val().trim();

    // Final URL to use for autosearch suggestions
    var autoSearchUrl = autoUrlE1 + autoUrlE2;            
    console.log(autoSearchUrl);

    // +++ WORKING - Get the API to see if the data is coming back
    // $.getJSON(autoSearchUrl).done(function(data){
        // console.log(data);
          
        //   $(function() {
            var results = {
              source: [$.getJSON(autoSearchUrl)],
              minLength: 2
            }
            console.log(results);

          $("input.searchInput").on("keydown.autocomplete", function() {
            $(this).autocomplete(results);
          });
        
          var addInput = function() {
            var inputHTML = " <input name='search' value='' class='searchInput' maxlength='15' />";
            $(inputHTML).appendTo("#input0");
            $("input.searchInput:last").focus();
          };
          
          console.log(inputHTML);

        // Testing to see if the first input section will work first
          if (!$("#input0").find("input.searchInput").length) {
            addInput();
          }
        
          $("input#input0").click(addInput);
        // });

    // });
// };

        // Function to collect all input ingredients
        $('#submitinput').on('click',function(event){   
            event.preventDefault();        

            // Create variables from all input ingredients
            var inputE1 = $('#input0').val().trim();
            var inputE2 = $('#input1').val().trim();
            var inputE3 = $('#input2').val().trim();
            var inputE4 = $('#input3').val().trim();
            var inputE5 = $('#input4').val().trim();


            localStorage.setItem("#input0" ,JSON.stringify(list));

            // Hide the ingredients search section when the recipe is displayed
            // Hide the "form" section
            $("#form").hide();
            // Hide the "drink" section
            $("#drinkcard").hide();
            // Show "content-container"
            $("#content-container").show();

            // getIngredients();

        });

        // update ingredients list into array
        // list.push(ingredients);

        // displayIngredients();
        // +++ WORKING - function displayIngredients(list) {
        //     // Empties out the html
        //     $('#ingredient-name').empty();

        //// (M) 4. set localstorage
        localStorage.setItem('ingredients', JSON.stringify(list));

        // (O) 5. create function for getting ingredients data from API with input variables 
        var getIngredients = function() {

            // Using the complex query API to get all necessary obj in returned array
            // var urlE1 = "https://api.spoonacular.com/recipes/complexSearch?apiKey=#54dabc814050472fb2b3631a332e7a58&";
            var urlE6 = "&&instructionsRequired=true&addRecipeInformation=true&number=1&ignorePantry=true"
            var urlE2 = "includeIngredients=";
            var urlE3 = "apple";
            var urlE4 = "sugar";
            var urlE5 = "flour";
                // ############# The Find by Ingredients API
                // var urlE1 = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=54dabc814050472fb2b3631a332e7a58&ingredients=";
                // var urlE2 = "apples,";
                // var urlE3 = "flour,";
                // var urlE4 = "sugar";
                // var urlE5 = "";
                // var urlE6 = "&number=1&limitLicense=false&ranking=1&ignorePantry=true";
            var getIngredientsUrl = urlE1 + urlE2 + urlE3 + "&" + urlE4 + "&" + urlE5 + urlE6;            
            console.log(getIngredientsUrl);

            // (O) 6. display recipe function
            $.getJSON(getIngredientsUrl).done(function(data){
                console.log(data);

                $.each(data.results, function(index, recipe) {
                    // getting the random recipe name
                    var recipeName = recipe.title;
                    var recipeTextE1 = $("<p>").html(index + recipeName);
                    recipeTextE1.addClass("title");
                    recipeTextE1.appendTo("#recipetitle");
                
                    // getting the recipe image thumb 
                    var recipeImage = recipe.image;
                    // probably just need to remove the "0" and it will work
                    var recipeTextE2 = $("<img>").html('img src="' + index + recipeImage +'">');
                    console.log(recipeImage);
                    recipeTextE2.appendTo("#recipeimage");

                    // getting the recipe ingredients
                    var recipeIngredients = [recipe.strIngredient];
                    console.log(recipeIngredients);
                    var recipeTextIng1 = $("<ul>").html(index + recipeIngredients);
                    recipeTextIng1.appendTo("#recipeingredients");
            
                    // getting the recipe for the recipe
                    var recipeDetails = data.recipe;
                    // probably just need to remove the "0" and it will work
                    var recipeTextE3 = $("<p>").html(index + recipeDetails);
                    console.log(recipeDetails);
                    recipeTextE3.appendTo("#recipe");
                });
            });
        };

// Cocktail function to get random suggestion based on previous click
var getDrink = function() {
    // Hide the "drink" section
    $("#drinkcard").show();
        
    var getDrinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    // Display the result onpage
    $.getJSON(getDrinkUrl).done(function(data){
        console.log(data);

        $.each(data.drinks, function(i, drink) {

            var E1 = drink.strDrink;
            var E2 = drink.strDrinkThumb;
            var E3 = drink.strGlass;
            var E4 = drink.strInstructions;
            var E5 = drink.strIngredient1;
            var E6 = drink.strIngredient2;
            var E7 = drink.strIngredient3;
            var E8 = drink.strIngredient4;
            var E9 = drink.strIngredient5;
            var E10 = drink.strIngredient6;
            var E11 = drink.strIngredient7;
            var E12 = drink.strIngredient8;
            var E13 = drink.strIngredient9;
            var E14 = drink.strIngredient10;

            console.log(E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12);

            // getting the random drink name
            $("<p>").html(E1).appendTo("#drink");
       
            // getting the drink image thumb 
            $("<img>").html(E2).appendTo("#drinkimage");

            // getting the type of glass to make the cocktail 
            // $("<img>").html(E3).appendTo("#drinkimage");
            $('#drinkimage').empty().html('<img src="' + E2 + '">').appendTo("#drinkimagecontainer");

            // Getting the drink ingredients ++ up to 15 ingredients
            if (E5 != null){$("<li>").html(E5).appendTo("#drinkingredient")};
            if (E6 != null){$("<li>").html(E6).appendTo("#drinkingredient")};
            if (E7 != null){$("<li>").html(E7).appendTo("#drinkingredient")};
            if (E8 != null){$("<li>").html(E8).appendTo("#drinkingredient")};
            if (E9 != null){$("<li>").html(E9).appendTo("#drinkingredient")};
            if (E10 != null){$("<li>").html(E10).appendTo("#drinkingredient")};
            if (E11 != null){$("<li>").html(E11).appendTo("#drinkingredient")};
            if (E12 != null){$("<li>").html(E12).appendTo("#drinkingredient")};
            if (E13 != null){$("<li>").html(E13).appendTo("#drinkingredient")};
            if (E14 != null){$("<li>").html(E14).appendTo("#drinkingredient")};
            
            // }
   
            // getting the recipe for the drink
            $("<p>").html(E4).appendTo("#drinkrecipe");

        });
    });
}

// Check for click events to get a drink suggestion
$("#drinkidea").on('click', getDrink);

// Function to get another cocktail suggestion
var resetDrink = function() {

    // clear content in drink section
    $("#drink").html("");
    $("#drinkimage").html("");
    $("#drinkingredient").html("");
    $("#drinkrecipe").html("");

    // get a new cocktail suggestion
    getDrink(); 
}

// Run the display function again based on button
$("#resetdrink").on('click', resetDrink);