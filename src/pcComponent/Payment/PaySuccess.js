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

export default class PaySuccess extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <div style={{width:'60%',marginTop:'150px',marginLeft:'20%'}}>
                    <Jumbotron>
                        <h1>恭喜你，支付成功!</h1>
                        <p>又获得积分啦~快去查看吧</p>
                        <p>
                            <Link to="/orderPage">
                                <Button bsStyle="primary">查看订单</Button>
                            </Link>
                            <Link to="/">
                                <Button bsStyle="primary" style={{marginLeft:'20vh'}}>继续逛逛</Button>
                            </Link>
                        </p>

                    </Jumbotron>
                </div>
            </div>
        )
    }
}