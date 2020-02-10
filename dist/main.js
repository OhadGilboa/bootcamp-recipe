let bringRecipe = function () {
    let inputValue = $(`#input-recipe`).val()
    $.get(`/recipes/${inputValue}/`, function (data) {
        recipe.render(data)
    })
}

// let imageClick = function () {
//     $(`.img`).on(`click`, () => {
//         console.log($(this.siblings(`.ul`)))
//     })
// }