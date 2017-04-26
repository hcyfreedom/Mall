import React from 'react';
import CommonInput from './CommonInput';
import CommonButton from './CommonButton';
import Nav from '../Cart/CartTopNav'
import {post} from '../../http/http'

export default class ModifyLogPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldTel: '',
            newTel: '',
        }
    }

    render() {
        return (
            <div>
                <Nav navTitle="修改登录密码" />
                <div style={{height: "100px"}}></div>
                <CommonInput type="text" label="原密码" onChange={(e, v) => this.setState({oldTel: v})} value={this.state.oldTel} />
                <CommonInput type="text" label="新密码" onChange={(e, v) => this.setState({newTel: v})} value={this.state.newTel} />
                <span style={{fontSize: "24px", margin: "20px 5%", color: "gray"}}>密码由6-20位英文字母、数字或符号组成</span>
                <CommonButton onClick={() => (e) => {
                    console.log(`click`)
                    }} label="确认修改" />
            </div>
        )
    }
}