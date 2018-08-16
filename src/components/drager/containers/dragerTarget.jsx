import React, {Component} from 'react';

import { DropTarget } from 'react-dnd';
import { ItemTypes } from 'components/constant';

import Card from '../components/card';


const spec = {
    drop(props,monitor) {
        return {}
    }
}

function collect(connect, monitor) {
    return {
      // Call this function inside render()
      // to let React DnD handle the drag events:
      connectDropTarget: connect.dropTarget(),
      // You can ask the monitor about the current drag state:
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      itemType: monitor.getItemType()
    };
  }

class DragerTarget extends Component{

    render(){
        const { connectDropTarget, isOver, content, moveOut } = this.props;
        return connectDropTarget(
            <div className="box">
                <h2>Target</h2>
                <div>
                    {content.map((item) => {
                        return <Card 
                                id={item} 
                                key={item}
                                moveOut={moveOut}/>
                    })}
                </div>
            </div>
        )
    }
}

export default DropTarget(ItemTypes.CARD, spec, collect)(DragerTarget)