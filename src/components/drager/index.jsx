import React,{ Component } from 'react';

import Dnd from 'tinper-bee/lib/Dnd';

export default class Drager extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    let arrayLike = {
      '0':'something',
      '1':'some',
      '2':'thing',
      'length':3
    }
    this.setState({
      array:Array.from(arrayLike)
    })
  }

  handleDrag = () => {
        
  }

  onStart = () => {

  }

  onStop = () => {

  }

  render(){
    return(
      <div>
          <Dnd onStart={this.onStart} onStop={this.onStop} >
            <div className="demo">我可随意拖拽</div>
          </Dnd>
      </div>
    )
  }
}