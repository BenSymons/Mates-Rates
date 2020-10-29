const graphql = require("graphql");
const _ = require("lodash");

const cities = [
    {id: "1", name: "Manchester"},
    {id: "2", name: "Leeds"},
    {id: "3", name: "Liverpool"},
    {id: "4", name: "York"}
]

const restaurants = [
    {id: "1", name: "Turtle_bay", cuisine: "Carribean"}
]

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema
} = graphql

const CityType = new GraphQLObjectType({
    name: "city",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
    })
})

const RestaurantType = new GraphQLObjectType({
    name: "Restaurant",
    fields: () => ({
        restaurant_id: {type: GraphQLID},
        name: {type: GraphQLString},
        cuisine: {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        city: {
            type: CityType,
            args: {
                id: {
                    type: graphql.GraphQLString
                }
            },
                resolve(parent, args) {
                    return _.find(cities, {id: args.id})
                }
            },
        restaurant: {
            type: RestaurantType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return _.find(restaurants, {id: args.id})
            }
        }
        }
    }
)

module.exports = new GraphQLSchema({
    query: RootQuery
})