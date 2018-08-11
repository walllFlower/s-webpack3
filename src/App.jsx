import React,{ Component } from 'react';

import Header from 'components/header';
import Drager from 'components/drager';

import 'style/common.scss';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="content">
                    <Drager/>
                </div>
            </div>
        )
    }
}