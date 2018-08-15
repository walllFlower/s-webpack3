import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Suqare extends Component{
    static propTypes = {
        black: PropTypes.bool
    }

    render(){
        let fill = this.props.black ? 'black' : 'white',
            stoke = this.props.black ? 'white' : 'black';

        return(
            <div style={{
                backgroundColor: fill,
                color: stoke,
                width: '100%',
                height: '100%'}}
            >
                {this.props.children}
            </div>
        )
    }
}