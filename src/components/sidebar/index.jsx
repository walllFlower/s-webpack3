import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'tinper-bee';

import './style.scss';

import Bridge from 'libs/bridge';

export default class Sidebar extends Component{
    constructor(props){
      super(props);
      this.state={
        openKeys:['1']
      }
    }

    /**
     *修改路由
     *
     * @memberof Sidebar
     */
    handleChange = (item) => {
      this.setState({
        openKeys: [item.key]
      })
    }

    handleBridge = () => {
      Bridge.get('/api/bridge',{
        params:{
          name:'zym'
        }
      })
      .then(res => {
        console.log(res);
      })
    }

    render(){
      return(
        <div className="sidebar-menu">
          <p onClick={this.handleBridge}>点我测试brideg</p>
          <Menu
              mode="inline"
              style={{width:220}}
              className="wrapper-menu"
              selectedKeys={this.state.openKeys}
              onSelect={this.handleChange}>
              <Menu.Item key="1">
                  <Link to="/">拖拽组件</Link>
              </Menu.Item>
              <Menu.Item key="2">
                  <Link to="/form">表单组件</Link>
              </Menu.Item>
              <Menu.Item key="3">
                  <Link to="/dragExample">拖拽例子</Link>
              </Menu.Item>
              <Menu.Item key="4">
                  <Link to="/login">登录</Link>
              </Menu.Item>
          </Menu>
        </div>
      )
    }
}