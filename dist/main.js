let bringRecipe = function () {
    let inputValue = $(`#input-recipe`).val()
    $.get(`/recipes/${inputValue}/`, function (data) {
        recipe.render(data)
    })
}



//Either One didn't work for me, couldn't find out why...
let logFirstingredient = function () {
    console.log($(`recipe`).closest(`.img`).siblings(`.ol`).closest(`.li`).val());
    console.log($(this).siblings(`.ol`).closest(`.li`).val()); 
}
