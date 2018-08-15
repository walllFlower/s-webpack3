import React,{Component} from 'react';
import PropTypes from 'prop-types';

//react-dnd
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BoardSquare from '../../components/boardSquare.jsx';
import Knight from '../../components/knight.jsx';

class Board extends Component{

    handleClickSquare = (x, y) => () => {
        // this.props.moveKnight(x, y);
    }

    renderSquare(i){
        let x = i % 8,
            y = Math.floor(i / 8);
        const black = (x + y) % 2 === 1;

        let [KnightX, KnightY] = this.props.knightPosition; 

        return(
            <div 
                key={i}
                style={{width: '50px', height: '50px'}}>
                <BoardSquare x={x} y={y}
                    moveKnight={this.props.moveKnight}>
                    {this.renderKnight(x,y)}
                </BoardSquare>
            </div>
        )
    }

    renderKnight = (x, y) => {
        const [knightX, knightY] = this.props.knightPosition;
        return knightX === x && knightY === y ? (
            <Knight/> 
        ) : null;
    }

    render(){
        const squares = [];
        for(let i = 0; i < 64; i++){
            squares.push(this.renderSquare(i));
        }
        return(
            <div
                style={{width: '400px', height: '400px', display: 'flex', flexWrap: 'wrap'}}>
                {squares}
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Board);