const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    enum Product_type {
        VALUE1
        VALUE2
        VALUE3
        VALUE4
    }
    type Products {
        _id: [ID!]
        product_type: Product_type!
        product_name: String!
        product_price: Int!
        product_size: String!
        description: String!
        imageurl: String!
        createdAt: String!
    }
    input ProductInput {
        product_type: Product_type!
        product_name: String!
        product_price: Int!
        product_size: String!
        description: String!
        imageurl: String
    }
    type User {
        id: ID!
        Token: String!
        session: ID!
        transact: Transaction! 
    }
    type Transaction {
        product: Products!
        invoice_no: Object
        invoice_date: Object
    }
    type Query {
        products: [Products!]!
        user: [User!]!
        transaction: [Transactions]!
    }
    type Mutation {
        createProduct(product:ProductInput): Products
    }
    schema {
        query: Query
        mutation: Mutation
    }
`);