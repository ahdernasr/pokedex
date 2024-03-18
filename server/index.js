const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/schema');
const cors = require('cors');

const port = 8888;
const app = express();

app.use(cors());

// Use GraphQL for routes
app.use('/graphql', graphqlHTTP({
    schema,
}))

app.listen(port, console.log('Server running on port ', port));