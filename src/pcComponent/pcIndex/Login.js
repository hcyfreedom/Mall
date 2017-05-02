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
                        登录
                    </Button>

                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>登录</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                           <div style={{width:'40%'}}>
                               <form>
                                       <ControlLabel>请输入您的手机号</ControlLabel>
                                       <FormControl
                                           type="text"
                                           value={this.state.value}
                                           onChange={this.handleChange}
                                       />
                                   <ControlLabel>验证码:
                                       </ControlLabel>
                                   <Button bsStyle="info" style={{}} bsSize="small">点击获取</Button>
                                       <FormControl
                                           type="text"
                                           value={this.state.value}
                                           onChange={this.handleChange}
                                       />
                                   <Button bsStyle="success" bsSize="small">登录</Button>
                               </form>
                            </div>
                            <div style={{transform:'translateX(50%) translateY(-140px)',borderLeft:'1px solid #eee',height:'140px',paddingLeft:'30px'}}>
                                第三方登录合作
                                <img src="/imgs/weixin2.png"/>
                                <img src="/imgs/zhifubao.png"/>

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