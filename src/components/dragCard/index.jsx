import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

//CSS
import './index.scss';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props, monitor, component) {
    // Return the data describing the dragged item
    const item = { id: props.id };
    return item;
  },

  endDrag(props, monitor) {
    console.log('source end drag',monitor)
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

// const propTypes = {
//   text: PropTypes.string.isRequired,

//   // Injected by React DnD:
//   isDragging: PropTypes.bool.isRequired,
//   connectDragSource: PropTypes.func.isRequired
// };

class Card extends Component {
  render() {
    // Your component receives its own props as usual
    const { id } = this.props;

    // These props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
      <div className="drag-card"
        style={{ opacity: isDragging ? 0.5 : 1 }}>
        <h3>No.{id}</h3>
      </div>
    );
  }
}

// Card.propTypes = propTypes;

// Export the wrapped component:
export default DragSource('card', cardSource, collect)(Card);