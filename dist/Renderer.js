const source = $('#recipe-template').html();
const template = Handlebars.compile(source);

class Recipe {
    render(data) {
        $(`#recipe`).empty()
        const newHTML = template({ data });
        $(`#recipe`).append(newHTML)

    }
}

let recipe = new Recipe()