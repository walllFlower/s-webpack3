import React,{ Component } from 'react';

import WrapedCard from 'components/dragCard';
import DragerTarget from 'components/drager/dragerTarget';

//CSS
import './index.scss';

export default class Drager extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="box">
          <h2>Source</h2>
          <div>
            <WrapedCard id="1"/>
            <WrapedCard id="2"/>
            <WrapedCard id="3"/>
            <WrapedCard id="4"/>
            <WrapedCard id="5"/>
          </div>
        </div>

        <DragerTarget/>
      </div>
    )
  }
}