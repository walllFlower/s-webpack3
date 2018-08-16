import React,{ Component } from 'react';

//react-dnd
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Card from './components/card';
import DragerTarget from './containers/dragerTarget';

//CSS
import './index.scss';

class Drager extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="box">
          <h2>Source</h2>
          <div>
            <Card id="1"/>
            <Card id="2"/>
            <Card id="3"/>
            <Card id="4"/>
            <Card id="5"/>
          </div>
        </div>

        <DragerTarget/>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Drager);