const express = require('express');
require('./config/db.config')()

const index = express();
index.use(express.json());

//routes
const recipeRouter = require('./routes/recipe.routes')
index.use('/recipes', recipeRouter)

const PORT = 4000
index.listen(Number(PORT), () =>{
  console.log(`Server up and running on port ${PORT}`)
})


// Import of the model Recipe from './models/Recipe.model.js'
//const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
//const data = require('./data');

//const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"

/*mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    const createRecipe = Recipe.create({
      title: "Asian Glazed Chicken Thighs",
      level: "Amateur Chef",
      ingredients: [
        "1/2 cup rice vinegar",
        "5 tablespoons honey",
        "1/3 cup soy sauce (such as Silver Swan®)",
        "1/4 cup Asian (toasted) sesame oil",
        "3 tablespoons Asian chili garlic sauce",
        "3 tablespoons minced garlic",
        "salt to taste",
        "8 skinless, boneless chicken thighs"
      ],
      cuisine: "Asian",
      dishType: "main_course",
      image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      duration: 40,
      creator: "Chef LePapu"
    })
    console.log(createRecipe) 
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });*/

