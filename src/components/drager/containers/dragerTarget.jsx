import React, {Component} from 'react';

import { DropTarget } from 'react-dnd';
import { ItemTypes } from 'components/constant';


const spec = {
    drop(props,monitor) {
        console.log('target drop',props,monitor.getItemType());
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
        const { connectDropTarget, isOver } = this.props;
        return connectDropTarget(
            <div className="box">
                <h2>Target</h2>
            </div>
        )
    }
}

export default DropTarget(ItemTypes.CARD, spec, collect)(DragerTarget)