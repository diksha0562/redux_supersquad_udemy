import characters_json from '../data/characters.json';
//  Reducer
import {ADD_CHARACTER} from '../action';
function characters(state = characters_json, action){
    switch(action.type){
        case ADD_CHARACTER : 
           let characters = state.filter((item)=>item.id !== action.id) 
           return characters;
        default : 
           return state;
    }
}

export default characters;