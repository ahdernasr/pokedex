const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const port = 3000
const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
}))

app.listen(port, console.log('Server running on port ', port));