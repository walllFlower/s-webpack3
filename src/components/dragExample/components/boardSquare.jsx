import React,{Component} from 'react'
import PropTypes from 'prop-types';

//react-dnd
import { ItemTypes } from 'components/constant';
import { DropTarget } from 'react-dnd';

import Square from './square';


function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
}
let moveKnight = null;
const squareTarget = {
    drop(props) {
        console.log(props);
        props.moveKnight(props.x, props.y);
    }
};

class BoardSquare extends Component{
    static propTypes = {
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        moveKnight: PropTypes.func.isRequired
    }

    componentWillMount(){
        moveKnight = this.props.moveKnight;
    }

    render(){
        const { x, y, connectDropTarget, isOver } = this.props;
        const black = (x + y) % 2 === 1;

        return connectDropTarget(
            <div
                style={{
                    width: '100%', 
                    height: '100%', 
                    position: 'relative'
                }}>
                <Square black={black}>
                    {this.props.children}
                </Square>
                {isOver &&
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        backgroundColor: 'green',
                        opacity: 0.7
                    }}>
                </div>}
            </div>
        )
    }
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);