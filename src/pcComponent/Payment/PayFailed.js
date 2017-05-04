/**
 * Created by hcy on 2017/5/3.
 */
/**
 * Created by hcy on 2017/5/3.
 */
import React from 'react'
import Nav from '../../pcComponent/NavBar/NavDetail'
import {Jumbotron,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class PayFailed extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <div style={{width:'60%',marginTop:'150px',marginLeft:'20%'}}>
                    <Jumbotron>
                        <h1>抱歉，支付失败！</h1>
                        <p>检查操作步骤是否有误~</p>
                        <p>
                            <Link to="/payment">
                                <Button bsStyle="primary">重新选择支付方式</Button>
                            </Link>
                            <Link to="/">
                                <Button bsStyle="primary" style={{marginLeft:'20vh'}}>取消订单</Button>
                            </Link>
                        </p>

                    </Jumbotron>
                </div>
            </div>
        )
    }
}