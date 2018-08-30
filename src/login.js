import React,{ Component } from 'react';
import { render } from 'react-dom';

import cookie from 'react-cookies';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: ''
        }
    }

    handlerChangeInput = (stateName) => (e)=> {
        this.setState({
            [stateName]: e.target.value
        })
    }
    
    handlerLogin = () => {
        let {username, password} = this.state;

        axios.post('/login',{
            username,
            password
        })
        .then((res) => {
            console.log(res);
            alert('登录成功');
            // location.pathname = '/';
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handlerRegis = () => {
        let {username, password} = this.state;

        axios.post('/register',{
            username,
            password
        })
        .then((res) => {
            console.log(res);
            alert('注册成功');
            this.setState({
                username: '',
                password: ''
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){
        return(
            <div>
                <div>
                    <label>用户名</label>
                    <input type="text" value={this.state.username}
                        onChange={this.handlerChangeInput('username')}/>
                </div>
                <div>
                    <label>密码</label>
                    <input type="text" value={this.state.password}
                        onChange={this.handlerChangeInput('password')}/>
                </div>
                <div>
                    <button onClick={this.handlerLogin}>登录</button>
                </div>
                <div>
                    <button onClick={this.handlerRegis}>注册</button>
                </div>

            </div>
        )
    }
}

render(
    <Login/>,
    document.getElementById('app')
)