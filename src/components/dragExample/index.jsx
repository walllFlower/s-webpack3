import React,{Component} from 'react';
import Board from './containers/board';

export default class dragExample extends Component{
    state = {
        knightPosition: [0,0]
    }

    moveKnight = (x, y) => {
        this.setState({
            knightPosition: [x, y]
        })
    }

    render(){
        return(
            <div>
                <Board 
                    knightPosition={this.state.knightPosition}
                    moveKnight={this.moveKnight}
                />
            </div>
        )
    }
}