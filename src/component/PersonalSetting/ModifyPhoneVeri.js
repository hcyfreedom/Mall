import React from 'react';
import CommonInput from './CommonInput';
import CommonButton from './CommonButton';

export default class ModifyPhoneVeri extends React.Component {
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
                <CommonInput type="text" label="已验证手机" onChange={(e, v) => this.setState({oldTel: v})} value={this.state.oldTel} />
                <CommonInput type="text" label="新手机号码" onChange={(e, v) => this.setState({newTel: v})} value={this.state.newTel} />
                <CommonButton label="确认修改" />
            </div>
        )
    }
}