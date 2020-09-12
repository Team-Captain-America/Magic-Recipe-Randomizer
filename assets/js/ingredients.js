// (A) 1. create variables of major sections to use within all javascript

// (A) 3. function to collect all input ingredients

// Hidden recipe card and drink card sections on page load

$(function() {
    $('#content-container').hide();
});

    // create localstorage for upcoming array
var list = JSON.parse(localStorage.getItem('ingredients')) || [];

    $(document).ready(function() {
    
        // Hide the ingredients search section when the recipe is displayed
        $("#submitinput").click(function(){
            $('.form').hide();
            });

        // Create variables from all input ingredients
        // Check for click events on the form
        var inputE1 = $('#input').val();

        var taskArray = new Array();
        $("input[id=input0").each(function() {
            console.log(taskArray);
        });

        // Add the new variable val to Ingredients0
        // inputE1.val('new val');
        
        console.log(inputE1);

        getIngredients();
    });
        // ').click(function() {

        //         var inputE1 = $('#input0').val();
        //         var inputE2 = $('#input1').val();
        //         var inputE3 = $('#input2').val();
        //         var inputE4 = $('#input3').val();
        //         var inputE5 = $('#input4').val();
        


            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            // $(".navbar-burger").toggleClass("is-active");
            // $(".navbar-menu").toggleClass("is-active");
    
    //     var taskArray = new Array();
    //     $("input[name=input]").each(function() {
    //    taskArray.push($(this).val());

    //    console.log(taskArray);
    //     });

        // update ingredients list into array
        // list.push(ingredients);

        // displayIngredients();

        //// (M) 4. set localstorage
        localStorage.setItem('ingredients', JSON.stringify(list));

        // (O) 5. create function for getting ingredients data from API with input variables
        
        
        var getIngredients = function() {
            var urlE1 = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=54dabc814050472fb2b3631a332e7a58&ingredients=";
            var urlE6 = "&number=1&limitLicense=true&ranking=1&ignorePantry=true";
            var urlE2 = "apples,";
            var urlE3 = "flour,";
            var urlE4 = "sugar";
            var urlE5 = "";
            var getIngredientsUrl = urlE1 + urlE2 + urlE3 + urlE4 + urlE6;            
            console.log(getIngredientsUrl);
        
            // Display the result onpage
            $.getJSON(getIngredientsUrl).done(function(data){
                console.log(data);
            
                // (O) 6. display recipe function
            function displayIngredients(list) {
                // Empties out the html
                $('#ingredient-name').empty();

                // ########## not necessary yet, but keep in case it's needed later - iterates over the 'list' 
                // for (var i = 0; i < list.length; i++) {
                //     // Sets the input values
                //     var ingredientE1 = $('<p>');
                //     ingredientE1.text(list[i]);
                //     toDoClose.addClass('subtitle');

                
            };
            });

        }

// (M) 7. run second API for drinks to match with the recipe
// Cocktail function to get random suggestion based on previous click
var getDrink = function() {
    var getDrinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    // Display the result onpage
    $.getJSON(getDrinkUrl).done(function(data){
        console.log(data);
        $.each(data.drinks, function(index, drink) {
            // getting the random drink name
            var drinkName = drink.strDrink;
            var drinkTextE1 = $("<p>").html(index + drinkName);
            drinkTextE1.appendTo("#drink");
       
            // getting the drink image thumb 
            var drinkImage = drink.strDrinkThumb;
            // probably just need to remove the "0" and it will work
            var drinkTextE2 = $("<img>").html('img src="' + index + drinkImage +'">');
            console.log(drinkImage);
            drinkTextE2.appendTo("#drinkimage");

            // getting the drink ingredients
            var drinkIngredients = [drink.strIngredient];
            console.log(drinkIngredients);
            var drinkTextIng1 = $("<ul>").html(index + drinkIngredients);
            drinkTextIng1.appendTo("#drinkingredient");

            // for (var i = 0; i < drink.strIngredient[i].length; i++) {
            //     // Sets the `list` item's value as text of this <p> element
            //     var drinkTextIng1 = $("<ul>").html(index + drinkIngredients);
            //     drinkTextIng1.text(list[i]);
            //     drinkTextIng1.appendTo("#drinkingredient");
                
            // var array = [drink.strIngredient, i];
            // console.log(array);
   
            // getting the recipe for the drink
            var drinkRecipe = drink.strInstructions;
            // probably just need to remove the "0" and it will work
            var drinkTextE3 = $("<p>").html(index + drinkRecipe);
            console.log(drinkRecipe);
            drinkTextE3.appendTo("#drinkrecipe");
        })
    });
}

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

// (A) 8. run the display function again based on button
$("#resetdrink").on('click', resetDrink);