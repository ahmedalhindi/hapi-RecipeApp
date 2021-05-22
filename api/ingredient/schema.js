const {gql} = require('apollo-server-hapi')

module.exports = gql(`
    type Ingredient {
        _id: ID
        name: String
    }

    type Query {
        allIngredients: [Ingredient]
    }

    type Mutation {
        newIngredient(name: String): Ingredient
    }

`)