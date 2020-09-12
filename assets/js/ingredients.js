// (A) 1. create variables of major sections to use within all javascript

// (A) 3. function to collect all input ingredients

// create localstorage for upcoming array
var list = JSON.parse(localStorage.getItem('ingredients')) || [];

function formInput() {
    // $(document).ready(function() {
    //  create input variables from all ingredients
    $("#submittext").on("click", function(event){
        var inputE1 = $('#input0').val();
        var inputE2 = $('#input1').val();
        var inputE3 = $('#input2').val();
        var inputE4 = $('#input3').val();
        var inputE5 = $('#input4').val();

        console.log(inputE1, inputE2, inputE3, inputE4, inputE5);

    //     var taskArray = new Array();
    //     $("input[name=input]").each(function() {
    //    taskArray.push($(this).val());

    //    console.log(taskArray);
    //     });

        // update ingredients list into array
        list.push(ingredients);

        displayIngredients(list);

        //// (M) 4. set localstorage
        localStorage.setItem('ingredients', JSON.stringify(list));

        // (O) 5. create function for getting ingredients data from API with input variables
        function getIngredients(id){

            $.ajax({
            url: "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=54dabc814050472fb2b3631a332e7a58",
            success:function(data) {
                console.log('success', data);
            }
            });
        };
    });

    // (O) 6. display recipe function
    function displayIngredients(list) {
        // Empties out the html
        $('#ingredient-name').empty();

        // Iterates over the 'list'
        for (var i = 0; i < list.length; i++) {
            // Sets the input values
            var ingredientE1 = $('<p>');
            ingredientE1.text(list[i]);
            toDoClose.addClass('subtitle');

            // <figure class="image is-128x128">
            //   <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            // </figure><br>
            // <div class="content">
            //   <p class="" id="ingredient-description"></p>
        }
    };
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