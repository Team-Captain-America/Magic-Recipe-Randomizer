// (M) 1. create variables of major sections to use within all javascript

//// (M) 2. get localstorage

// (M) 3. collect all input ingredients
// //  create variables from all input ingredients

//// (M) 4. set localstorage



// (O) 5. create function for getting ingredients data from API]
// fetch from spoonacular

function.getIngredients(id){
    $.ajax({
    url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=54dabc814050472fb2b3631a332e7a58",
    });
}


// (O) 6. display recipe function
    // for loop for ingredients

function.displayRecipe(q){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/search?apiKey=54dabc814050472fb2b3631a332e7a58&number=1&query="+q,

    });
}

console.log(displayRecipe)

// (A) 7. run second API for drinks to match with the recipe
    // display on page

// (A) 8. run the display function again based on button