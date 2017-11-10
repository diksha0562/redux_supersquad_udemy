import React from 'react';
import Characterlist from './Characterlist';
import '../styles/index.css';
import Herolist from './Herolist';
import Squadlist from './Squadstate';
class App extends React.Component{
    render()
{
    return(
        <div className='App'>
            <h1>Super Squad</h1>
            <Characterlist/>
            <Herolist/>
            <Squadlist/>
            </div>
    )
}}
export default App;