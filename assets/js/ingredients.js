// Hidden recipe card and drink card sections on page load
$(document).ready(function () {
    $('#content-container').hide();
});

// create localstorage for upcoming array
var list = JSON.parse(localStorage.getItem('ingredients')) || [];

    // Function to collect all input ingredients
    $('#submitinput').on('click', function (event) {
        event.preventDefault();

        // Create variables from all input ingredients
        var inputE1 = $('#input0').val().trim();
        var inputE2 = $('#input1').val().trim();
        var inputE3 = $('#input2').val().trim();
        var inputE4 = $('#input3').val().trim();
        var inputE5 = $('#input4').val().trim();

        console.log(inputE1, inputE2, inputE3, inputE4, inputE5);

        // Hide the ingredients search section when the recipe is displayed
        // Hide the "form" section
        $("#form").hide();
        // Hide the "drink" section
        $("#drinkcard").hide();
        // Show "content-container"
        $("#content-container").show();

        $(function () {
            // Empties out the html
            $("#ingredient-name").empty()
            // Add ingredients to ingredient tiles
            if (inputE1 != null) { $("#0").replaceWith(inputE1)} else { ("#ingredient-name0").hide() };
            if (inputE2 != null) { $("#1").replaceWith(inputE2)} else { ("#ingredient-name1").hide() };
            if (inputE3 != null) { $("#2").replaceWith(inputE3)} else { ("#ingredient-name2").hide() };
            if (inputE4 != null) { $("#3").replaceWith(inputE4)} else { ("#ingredient-name3").hide() };
            if (inputE5 != null) { $("#4").replaceWith(inputE5)} else { ("#ingredient-name4").hide() };

            // displayIngredients();


        //// (M) 4. set localstorage
        localStorage.setItem('ingredients', JSON.stringify(list));

        // Create function for getting ingredients data from API with input variables 
        var getIngredients = function () {
            // Using the complex query API to get all necessary obj in returned array
            var urlE1 = "https://api.spoonacular.com/recipes/complexSearch?apiKey=32ce0fd35f894802a30412fca80defa8&";
            var urlE6 = "instructionsRequired=true&addRecipeInformation=true&number=1&ignorePantry=true"
            var urlE2 = "includeIngredients=";
            var urlE3 = "apple";
            var urlE4 = "sugar";
            var urlE5 = "flour";
            var getIngredientsUrl = urlE1 + urlE2 + inputE1 + "&" + inputE2 + "&" + inputE3 + "&" + inputE4 + "&" + inputE5 + "&" + urlE6;
            console.log(getIngredientsUrl);

            // Display recipe function
            $.getJSON(getIngredientsUrl).done(function (data) {
                console.log(data);

                $.each(data.results, function (i, recipe) {

                    var iE1 = recipe.title;
                    var iE2 = recipe.image;
                    var iE3 = recipe.sourceUrl;

                $.each(data.results[0].analyzedInstructions[0].steps, function (data) {
                    // getting the recipe
                    $("<li>").html(this.step).addClass("ml-5").appendTo("#recipesteps");

                    })

                    // getting the ingredients
//                     var ing = $[this[0].name];
//                     $("<li>").text(ing).addClass("ml-5").appendTo("#recipeingredients");
//                     console.log(ing);

                    console.log(iE1, iE2);

                    // getting the random recipe name
                    $("<p>").html(iE1).addClass("subtitle is-5 has-text-weight-bold").appendTo("#recipetitle");

                    // getting the recipe image thumb 
                    $("<img>").attr('src', iE2).appendTo("#recipeimage");

                    // getting the recipe URL 
                    $("<a>").attr('href', iE3).text(iE3).appendTo("#recipeurl");
                });
            });
        };

        getIngredients();
        
    });
})
    // Cocktail function to get random suggestion based on previous click
    var getDrink = function () {
        // Hide the "drink" section
        $("#drinkcard").show();

        var getDrinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

        // Display the result onpage
        $.getJSON(getDrinkUrl).done(function (data) {
            console.log(data);

            $.each(data.drinks, function (i, drink) {

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
                $("<p>").html(E1).addClass("has-text-centered").appendTo("#drink");

                // getting the drink image thumb 
                $("<img>").html(E2).addClass("has-text-centered").appendTo("#drinkimage");

                // getting the type of glass to make the cocktail 
                // $("<img>").html(E3).appendTo("#drinkimage");
                $('#drinkimage').empty().html('<img src="' + E2 + '">').addClass("has-text-centered").appendTo("#drinkimagecontainer");

                // Getting the drink ingredients ++ up to 15 ingredients
                if (E5 != null) { $("<li>").html(E5).appendTo("#drinkingredient") };
                if (E6 != null) { $("<li>").html(E6).appendTo("#drinkingredient") };
                if (E7 != null) { $("<li>").html(E7).appendTo("#drinkingredient") };
                if (E8 != null) { $("<li>").html(E8).appendTo("#drinkingredient") };
                if (E9 != null) { $("<li>").html(E9).appendTo("#drinkingredient") };
                if (E10 != null) { $("<li>").html(E10).appendTo("#drinkingredient") };
                if (E11 != null) { $("<li>").html(E11).appendTo("#drinkingredient") };
                if (E12 != null) { $("<li>").html(E12).appendTo("#drinkingredient") };
                if (E13 != null) { $("<li>").html(E13).appendTo("#drinkingredient") };
                if (E14 != null) { $("<li>").html(E14).appendTo("#drinkingredient") };

                // getting the recipe for the drink
                $("<p>").html(E4).appendTo("#drinkrecipe");

            });
        });
    }

    // Check for click events to get a drink suggestion
    $("#drinkidea").on('click', getDrink);

    // Function to get another cocktail suggestion
    var resetDrink = function () {

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
