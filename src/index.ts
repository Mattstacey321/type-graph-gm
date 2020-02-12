import "reflect-metadata";
import {ApolloServer} from 'apollo-server-express'
import * as Express from "express";
import { buildSchema } from 'type-graphql';
import { ListGame } from './resolvers/ListGame/resolver/ListGame.resolver';
import * as Mongoose from 'mongoose';
require('dotenv').config();
const main = async () => {

    const schema = await buildSchema(
        {
            resolvers: [
                ListGame
            ],

        }
    );
    
    Mongoose.connect(process.env.mongodb_uri,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
        console.log("Mongo is staring !!!");
        
    })
    const apolloSever = new ApolloServer({
        schema,
        playground: true,
        debug:true,
        typeDefs:[

        ]
    })
    const app = Express();
    const port = process.env.PORT || 4000;
    apolloSever.applyMiddleware({ app });
    app.listen(port, () => {
        console.log(`Server start at http://localhost:${port}`);

    });
}
main();
