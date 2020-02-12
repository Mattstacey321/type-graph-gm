import * as mongoose from 'mongoose';

const listGameSchema= new mongoose.Schema({
    game_name:String,
    genres: [String],
    popularity: String,
    platforms:[String],
    tag:[String],
    logo:String,
    image:[String],
    cover_image:String
})
export const listGame= mongoose.model('listGame',listGameSchema);