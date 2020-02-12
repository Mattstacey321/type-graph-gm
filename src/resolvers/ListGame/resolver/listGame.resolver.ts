import { Resolver, Query } from 'type-graphql';

@Resolver()
class getListGame{
    @Query(()=>String)
    async hello(){
        return 'Hello';
    }
}

 export class ListGame{}