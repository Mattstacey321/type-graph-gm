import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Game } from '../interface/Game';
import {listGame} from '../schema/ListGame.schema';
import { GameInput } from '../input/GameInput';

@Resolver()
export class ListGame{
    @Query(()=>[Game])
    async getListGame(){
        return await listGame.find();
    }
    @Mutation(()=>Game)
    async createGame(@Arg('input') input:GameInput){
        return await listGame.create(input).then((v)=>{
            return v;
        });

    }
}