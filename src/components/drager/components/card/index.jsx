import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DragSource } from 'react-dnd';
import { ItemTypes } from 'components/constant';

//CSS
import './index.scss';

const cardSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Card extends Component {
  render() {
    const { id } = this.props;

    const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
      <div className="drag-card"
        style={{ opacity: isDragging ? 0.5 : 1 }}>
        <h3>No.{id}</h3>
      </div>
    );
  }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);