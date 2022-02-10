const { urlencoded } = require('express');
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const users = [
  { id: '1', firstname: 'Joe', age: 21 },
  { id: '2', firstName: 'Jane', age: 35 }
];

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  }
});

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: { type: userType },
    args: { id: { type: GraphQLString } },
    resolve(parentValue, args) {
      return users.find(user => user.id === args.id);
    }
  }
});