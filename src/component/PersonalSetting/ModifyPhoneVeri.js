import React from 'react';
import CommonInput from './CommonInput';
import CommonButton from './CommonButton';
import Nav from '../Cart/CartTopNav'
import {get, post} from '../../http/http'

export default class ModifyPhoneVeri extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldTel: '',
            newTel: '',
        }
    }

    changePhone() {
        get('/account/getOriginalTelephone', res => {
            let obj = JSON.parse(res.data);
            if(obj.msg != this.state.oldTel)
                return alert('原手机号不匹配');
            post('/account/changeTelephone', res => {
                console.log('更新手机号响应', res);
            })
        })
    }

    render() {
        return (
            <div>
                <Nav navTitle="修改手机号码" />
                <div style={{height: "100px"}}></div>
                <CommonInput type="text" label="已验证手机" onChange={(e, v) => this.setState({oldTel: v})} value={this.state.oldTel} />
                <CommonInput type="text" label="新手机号码" onChange={(e, v) => this.setState({newTel: v})} value={this.state.newTel} />
                <CommonButton　onClick={this.changePhone.bind(this)} label="确认修改" />
            </div>
        )
    }
}