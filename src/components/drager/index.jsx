import React,{ Component } from 'react';

import Card from 'components/dragCard';

export default class Drager extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Card text="我可以拖拽"/>
      </div>
    )
  }
}