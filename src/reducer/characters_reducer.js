import characters_json from '../data/characters.json';
//  Reducer
import {ADD_CHARACTER} from '../action';
import {REMOVE_CHARACTER} from '../action';
import {createCharacter} from './helper';
function characters(state = characters_json, action){
    let characters;
    switch(action.type){
        
        case ADD_CHARACTER : 
            characters = state.filter((item)=>item.id !== action.id) 
           return characters;
           break;
        case REMOVE_CHARACTER:
           characters = [...state,createCharacter(action.id)]
              return characters;
              break;
        default : 
           return state;
    }
}
export default characters;