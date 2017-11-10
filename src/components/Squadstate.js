import React from 'react';
import {connect} from 'react-redux';
class Squadstate extends React.Component{
    strength(){
        let strength=0;
        this.props.heros.forEach(hero=>strength+=hero.strength);
        return strength;
    }
    render(){
        return(
            <div>
            <h4>Squad Stats</h4>
            <ul>
            <li>Overall Strength: {this.strength()}</li>
            
            </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {heros: state.heros};
}

export default connect(mapStateToProps,null)(Squadstate)