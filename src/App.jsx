import React,{ Component } from 'react';

import Sidebar from 'components/sidebar';

//路由
import { BrowserRouter, Route } from 'react-router-dom';

//动态加载
import Loadable from 'react-loadable';
import loading from './loading';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

//CSS
import 'style/common.scss';

const AsyncMyForm = Loadable({
    loader: () => import('components/myForm'),
    loading:loading
});

const AsyncDrger = Loadable({
    loader: () => import('components/drager'),
    loading: loading
})

const AsyncDragExample = Loadable({
    loader: () => import('components/dragExample'),
    loading
})
class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <div className="content">
                    <Sidebar/>
                    <div className="inner-container">
                        <Route exact path="/" component={AsyncDrger}></Route>
                        <Route path="/form" component={AsyncMyForm}></Route>
                        <Route path="/dragExample" component={AsyncDragExample}></Route>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default DragDropContext(HTML5Backend)(App);