/**
 * Created by hcy on 2017/5/3.
 */
import React from 'react';
import CommonInput from './CommonInput';
import CommonButton from './CommonButton';
import Nav from '../Cart/CartTopNav'
import {post} from '../../http/http'
import {BrowserRouter as Router, Route, Switch,Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'


const history = createHistory()

export default class Username extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: '',
        }
    }

    changeUserName(){
        post('/account/changeUserName',{
            userName:this.state.newName
        }, res => {

        })
        history.go("-1")

    }


    render() {
        return (
            <div>
                <Nav navTitle="修改用户名" />
                <div style={{height: "100px"}}></div>
                <CommonInput type="text" label="新用户名" onChange={(e, v) => this.setState({newTel: v})} value={this.state.newTel} />
                <CommonButton onClick={this.changeUserName.bind(this)} label="确认修改" />
            </div>
        )
    }
}