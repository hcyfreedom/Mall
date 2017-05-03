/**
 * Created by hcy on 2017/5/2.
 */
import React from 'react'
import {Button,Modal,FormControl,ControlLabel} from 'react-bootstrap'

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            value:''
        }
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    close(){
        this.setState({ showModal: false });
    }

    open(){

        this.setState({ showModal: true });
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render(){

        return(
            <div style={{transform:'translateY(-4px)'}}>

                <Button
                    bsStyle="primary"
                    onClick={this.open.bind(this)}
                >
                    注册
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>注册</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div >
                            <form>
                                <ControlLabel>请输入您的手机号</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                />
                                <div style={{marginTop:'30px'}}>
                                    <ControlLabel>验证码:
                                    </ControlLabel>
                                    <Button bsStyle="info" style={{marginLeft:'20px',marginBottom:'5px'}} bsSize="small">点击获取</Button>
                                    <FormControl
                                        type="text"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div style={{marginTop:'30px'}}>
                                    <ControlLabel>邀请码:
                                    </ControlLabel>
                                    <Button bsStyle="info" style={{marginLeft:'20px',marginBottom:'5px'}} bsSize="small">借用邀请码</Button>
                                    <FormControl
                                        type="text"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div style={wellStyles}>
                                    <Button bsStyle="success" block>注册</Button>
                                </div>
                            </form>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const wellStyles = {maxWidth: 400, margin: '30px auto 10px'};