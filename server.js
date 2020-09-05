const express = require('express');
const graphqlHttp = require('express-graphql').graphqlHTTP;
const graphqlSchema = require('./graphql/schema');
const mongoose = require('mongoose');
const graphqlResolvers = require('./graphql/resolver');

const app = express();

mongoose.connect('mongodb://localhost/productDB', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log(" Database connection established successfully");
});

app.use(
    '/graphql',
    graphqlHttp({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true
    })
);
app.listen(4000, () => console.log("Server is running on localhost:4000"));