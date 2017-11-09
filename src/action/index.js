export const ADD_CHARACTER = 'ADD_CHARACTER';

 function addCharacterById(id){
    const action={
        type : ADD_CHARACTER,
        // id:id
        id
    }
return action;
}
export default addCharacterById;