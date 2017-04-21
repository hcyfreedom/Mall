import React from 'react';
import CommonInput from './CommonInput';
import CommonButton from './CommonButton';

export default class ModifyPayPass extends React.Component {
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
                <CommonInput type="text" label="原密码" onChange={(e, v) => this.setState({oldTel: v})} value={this.state.oldTel} />
                <CommonInput type="text" label="新密码" onChange={(e, v) => this.setState({newTel: v})} value={this.state.newTel} />
                <span style={{fontSize: "24px", marginLeft: "5%", color: "gray"}}>密码由6-20位英文字母、数字或符号组成</span>
                <CommonButton label="确认修改" />
            </div>
        )
    }
}