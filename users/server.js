const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const PORT = 3000;

app.use('/graphql', graphqlHTTP({
  graphiql: true
}));

app.listen(PORT, () => console.log(`Listing on port ${PORT}`));