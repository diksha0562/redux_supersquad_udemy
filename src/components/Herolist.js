import React from 'react';
import {connect} from 'react-redux';
import {addCharacterById} from '../action';
import {removeCharacterById} from '../action';
class HeroList extends React.Component{
    render(){
        console.log('this.props in herolist',this.prop)
        return(
            <div>
               <h4> Heros List</h4>
               <ul>
               {this.props.heros.map(hero=>{
                   return(
                       <li key={hero.id}>
                       <div classNme='herolist'>{hero.name}
                       <input type='button' value= 'x' className='list-button' onClick={()=>{this.props.removeCharacterById(hero.id)}}/>
                       </div>
                       </li>
                   )
               })} 
               </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {heros:state.heros};
}

export default connect(mapStateToProps,{removeCharacterById})(HeroList);