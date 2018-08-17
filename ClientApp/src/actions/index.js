import {GETAllGAME,ADDGAME} from '../contants';
import * as GameAPI from '../utils/GamesAPI';
export const fetchGames = () => ({
    type: GETAllGAME,
    payload:GameAPI.getAll()
})

export const setGames = (data) => ({
    type: ADDGAME,
    payload:GameAPI.push(data)
})