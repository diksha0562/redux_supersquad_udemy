import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterById} from '../action';
import removeCharacterById from '../action';
class Characterlist extends React.Component{
    render(){
        console.log('this.props',this.props)
        return(
            
            <div>
                <h4>Character list</h4>
                <ul className='list-group'>
                
                    {this.props.characters.map(character=>{
                        return(
                            <li key={character.id} className= 'list-group-item'>
                            <div className='list-item'>{character.name}
                            
                            <input type='button' value= '+' className='list-button' onClick={()=>{this.props.addCharacterById(character.id)}}/></div>
                            </li>
                        )
                    })}
                 

                    </ul>
                </div>
        )
    }
}
function mapStateToProps(state){
    console.log('state',state);
    return{
        characters:state.characters
    };
}

// function mapDispatchToProps(dispatch){
// return bindActionCreators({addCharacterById}, dispatch)
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Characterlist);

export default connect(mapStateToProps,{addCharacterById})(Characterlist);