const express = require(`express`)
const app = express()
const request = require(`request`)
const path = require(`path`)
const bodyParser = require(`body-parser`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))



app.get(`/recipes/:ingredient/`, function (req, res) {
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (error, response) {
        console.log('error:', error);
        let recipe = JSON.parse(response.body).results
        res.send(recipe)
    })
})

app.get(`/sanity`, function (req, res) {
    res.send(`OK`)
})

const port = 8080
app.listen(port, function () {
    console.log(`All Good OG!`)
})