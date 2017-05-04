/**
 * Created by hcy on 2017/5/3.
 */
import React from 'react'
import Nav from '../NavBar/NavDetail'
import {Grid,Row,Col} from 'react-bootstrap'
import CartItems from './CartItems'
import CartTotal from '../../component/Cart/CartTotal'


export default class Cart extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <div style={{marginTop:'150px',backgroundColor:'#eee',height:'60px',lineHeight:"60px",textAlign:'center'}}>
                    <Grid>
                        <Row className="show-grid">
                            <Col  md={2}></Col>
                            <Col  md={2}>商品</Col>
                            <Col  md={2}>单价</Col>
                            <Col  md={3}>数量</Col>
                            <Col  md={1}>小计</Col>
                            <Col  md={2}>编辑</Col>
                        </Row>
                    </Grid>
                </div>

                <Grid style={{height:'8vh',lineHeight:'8vh',backgroundColor:'white'}}>
                    <Row className="show-grid">
                        <Col  md={2}><img src="/imgs/shop.png" style={{padding:'0 10px 0 10px'}}/>店铺名称</Col>
                        <Col  md={10}></Col>
                    </Row>
                </Grid>
                <CartItems/>
                <CartItems/>
                <CartItems/>
                <CartItems/>
                <CartItems/>

                <div style={{width:'100%',height:'10px',marginBottom:'150px'}}></div>
                <CartTotal className="cartTotalPc"/>
            </div>
        )
    }
}