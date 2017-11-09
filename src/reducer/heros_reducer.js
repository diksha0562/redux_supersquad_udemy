import characters_json from '../data/characters.json';
//  Reducer
import {ADD_CHARACTER} from '../action';
import {createCharacter} from './helper';
function heros(state=[], action){
    switch(action.type){
        case  ADD_CHARACTER:
        // let heros = [...state, characters_json.find(i=>i.id===action.id)]
        heros= [...state, createCharacter(action.id)]
        return heros;
        default:
           return state;
    }
}
export default heros;