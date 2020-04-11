export default `

    type Recipe {
        _id: String!
        name: String!
        ingredients: String!     
        description: String!
        imageUrl: String!
        difficulty: Int!
    }
    type Query {
        recipe(_id: String!): Recipe
        recipes: [Recipe]
    }

    type Mutation {
        addRecipe(name: String!, ingredients: String!, description: String!, imageUrl: String!, difficulty: Int!): Recipe
        editRecipe(_id: String!, name: String!, ingredients: String!, description: String!, imageUrl: String!, difficulty: Int!): Recipe
        deleteRecipe(_id: String!): Recipe
    }

`