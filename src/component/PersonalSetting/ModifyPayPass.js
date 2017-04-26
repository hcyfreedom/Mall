import React from 'react';
import CommonInput from './CommonInput';
import CommonButton from './CommonButton';
import Nav from '../Cart/CartTopNav'
import {post} from '../../http/http'

export default class ModifyPayPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originalPassword: '',
            newPassword: '',
        }
    }

    render() {
        return (
            <div>
                <Nav navTitle="修改支付密码" />
                <div style={{height: "100px"}}></div>
                <CommonInput type="password" label="原密码" onChange={(e, v) => this.setState({originalPassword: v})} value={this.state.originalPassword} />
                <CommonInput type="password" label="新密码" onChange={(e, v) => this.setState({newPassword: v})} value={this.state.newPassword} />
                <span style={{fontSize: "24px", marginLeft: "5%", color: "gray"}}>密码由6-20位英文字母、数字或符号组成</span>
                <CommonButton onClick={() => {
                        post('/account/changePayPassword', {
                            originalPassword: this.state.originalPassword,
                            newPassword: this.state.newPassword,
                        }, (res) => {
                            console.log('修改支付密码响应', res);
                        })
                    }} label="确认修改" />
            </div>
        )
    }
}