const ingredients = require('./services')
module.exports = {
    Query:{
        allIngredients: ingredients.getAll
    },
    Mutation:{
        newIngredient: (__, args)=>ingredients.new(args)
    }
}