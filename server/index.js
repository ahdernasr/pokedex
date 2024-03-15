const express = require('express');
const port = 3000
const { graphqlHTTP } = require('express-graphql');
const { graphql } = require('graphql');
const schema = require("./schema/schema");

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
}))

app.listen(port, console.log('Server running on port ', port));