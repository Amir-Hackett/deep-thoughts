//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs ``(tagged template)
const typeDefs = gql`
    type Query {
        helloWorld: String
       }
    `;

//exports typeDefs
module.exports = typeDefs;