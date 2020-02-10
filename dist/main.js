let bringRecipe = function () {
    let inputValue = $(`#input-recipe`).val()
    $.get(`/recipes/${inputValue}/`, function (data) {
        recipe.render(data)
    })
}


let logFirst = function () {
    $(`.img`).click(function () {
        console.log($(this).siblings(`.ol`));
    });
}

// onclickImg()
// let onclickImg = () => {
//     console.log($(this));
// }


// .siblings(`.ul`).closest(`.li`).val()