import React,{ Component } from 'react';

//react-dnd
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Card from './components/card';
import DragerTarget from './containers/dragerTarget';

//CSS
import './index.scss';
import { Map } from 'core-js';

class Drager extends Component{
  constructor(props){
    super(props);
    this.state = {
      content:[]
    }
  }

  handleDragIn = (item) => {
    let { content } = this.state;
    let contentSet = new Set(content);

    contentSet.add(item);
    let arr = [...contentSet];
    arr.sort();

    this.setState({
      content: arr
    })
  }

  handleMoveout = (item) => () => {
    let { content } = this.state;
    if(content.includes(item)) {
      let set = new Set(content);
      set.delete(item);
      let arr = [...set];
      this.setState({
        content: arr
      })
    }
  }

  render(){
    const source = [1,2,3,4,5];
    let { content } = this.state;

    return(
      <div>
        <div className="box">
          <h2>Source</h2>
          <div>
            {
              source.map((item) => {
                return <Card id={item}
                          key={item}
                          disable={content.includes(item)}
                          dragIn={this.handleDragIn}/>
              })
            }
          </div>
        </div>

        <DragerTarget 
          content={this.state.content}
          dragIn={this.handleDragIn}
          moveOut={this.handleMoveout}/>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Drager);