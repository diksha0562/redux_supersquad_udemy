export const ADD_CHARACTER = 'ADD_CHARACTER';

export default function addCharacterById(id){
    const action={
        type : ADD_CHARACTER,
        // id:id
        id
    }
return action;
}