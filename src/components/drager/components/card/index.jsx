import React, { Component } from 'react';

import { DragSource } from 'react-dnd';
import { ItemTypes } from 'components/constant';

//CSS

const cardSource = {
  beginDrag(props) {
    return {};
  },

  endDrag(props, monitor) {
    if(monitor.didDrop()) props.dragIn(props.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const deleteStyle = {
  position: 'absolute',
  right: 0,
  top: 0,
  cursor: 'pointer'
}

class Card extends Component {
  render() {
    const { isDragging, connectDragSource, disable, id, moveOut } = this.props;

    return connectDragSource(
      <div className="drag-card"
        style={{ opacity: isDragging ? 0.5 : 1,
                 backgroundColor: disable ? 'gray' : 'burlywood',
                 position: 'relative' }}>
        <h3>Step {id}</h3>
        { moveOut && 
          <span 
            style={deleteStyle}
            onClick={moveOut(id)}>
            œ∑
          </span>}
      </div>
    );
  }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);