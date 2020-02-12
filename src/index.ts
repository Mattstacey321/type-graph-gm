import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import * as Express from "express";
import { buildSchema } from 'type-graphql';
import { ListGame } from './resolvers/ListGame/resolver/listGame.resolver';

const main = async () => {
    const schema = await buildSchema(
        {
            resolvers: [
                ListGame
            ],
        }
    );
    const apolloSever = new ApolloServer({schema})
    const app = Express();
    const port =process.env.PORT||4000;
    apolloSever.applyMiddleware({app});
    app.listen(port,()=>{
        console.log("Server start at port",port);

    });
}
main();
