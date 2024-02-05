import express from 'express';
import { buildSchema } from 'graphql'; 
import { graphqlHTTP } from 'express-graphql';

const rootSchema = buildSchema(`
    type user {
        id: Int
        hoTen: String
    }
    type rootMutation {
        createUser: String
    }
    type rootQuery{
        getUser(id: String, hoTen: String): user
    }
    schema {
        query: rootQuery
        mutation: rootMutation
    }
`);
const resolver = {
    getUser: ({id, hoTen}) => {
        return {
            id: Number(id),
            hoTen: hoTen
        }
    },
    createUser: () => {
        return "createUser"
    }
}
const app = express();
app.use("/graph", graphqlHTTP({
    schema: rootSchema,
    rootValue: resolver,
    graphiql: true
}))

app.listen(8081, () => {
    console.log("BE start");
});

// commit A3