/**
 * Created by hcy on 2017/5/3.
 */
// pc
import React from 'react'
import {Grid,Row,Col} from 'react-bootstrap'

export default class CartItems extends React.Component{
    render(){
        return(
                <div style={{height:'20vh',borderBottom:'1px solid gray',borderTop:'1px solid gray',backgroundColor:'white'}}>
                    <Grid>
                        <Row className="show-grid">
                            <Col  md={2}>
                                <div className="cartCircleIconPc"></div>
                                <img className="cartImgPc" src="/imgs/a1.png"/>

                            </Col>
                            <Col  md={2} style={{lineHeight:'20vh',textAlign:'center'}}>name</Col>
                            <Col  md={2}>
                                <p style={{marginTop:'5vh',textAlign:'center'}}>￥290</p>
                                <div className="cartItemsLowPc">最低实付99元</div>
                            </Col>
                            <Col  md={3} style={{lineHeight:'20vh',textAlign:'center'}}>
                                <div className="changeWrapPc" >
                                    <div className="changeSubPc" > - </div>
                                    <div className="changeCountPc">10</div>
                                    <div className="changePlusPc"> + </div>
                                </div>
                            </Col>
                            <Col  md={1} style={{lineHeight:'20vh',textAlign:'center',color:'red'}}>￥292</Col>
                            <Col  md={2} style={{lineHeight:'20vh',textAlign:'center'}}>删除</Col>
                        </Row>
                    </Grid>
            </div>
        )
    }
}