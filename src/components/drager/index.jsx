import React,{ Component } from 'react';

export default class Drager extends Component{

    componentDidMount(){
        let arrayLike = {
            '0':'something',
            '1':'some',
            '2':'thing',
            'length':3
        }
        this.setState({
            array:Array.from(arrayLike)
        })
    }

    render(){
        return(
            <div>
                Something can be drag
            </div>
        )
    }
}