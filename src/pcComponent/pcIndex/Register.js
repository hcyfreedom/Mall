/**
 * Created by hcy on 2017/5/2.
 */
/**
 * Created by hcy on 2017/5/2.
 */
import React from 'react'
import {Button,Modal} from 'react-bootstrap'

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
    }
    close(){
        this.setState({ showModal: false });
    }

    open(){

        this.setState({ showModal: true });
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
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>hcy</p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}