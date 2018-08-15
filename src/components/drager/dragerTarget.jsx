import React, {Component} from 'react';

import { DropTarget } from 'react-dnd';

//CSS
import './index.scss';

const spec = {
    canDrop(props, monitor) {
        // You can disallow drop based on props or item
        const item = monitor.getItem();
        // return canMakeChessMove(item.fromPosition, props.position);
    },

    drop(props, monitor, component) {
        console.log('target drop');
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
        const { connectDropTarget, isOver, canDrop } = this.props;

        return connectDropTarget(
            <div className="box">
                <h2>Target</h2>
            </div>
        )
    }
}

export default DropTarget('card', spec, collect)(DragerTarget)