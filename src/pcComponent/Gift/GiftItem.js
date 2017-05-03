/**
 * Created by hcy on 2017/5/3.
 */
/**
 * Created by hcy on 2017/5/3.
 */
import React from 'react'
import {Thumbnail,Button} from 'react-bootstrap'
export default class GiftItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Thumbnail style={{width:'20%'}} src="/imgs/1.jpg" alt="242x200">
                <h3>商品名称</h3>
                <p style={{color:"red"}}>副标题</p>
                <p>
                    <img src="/imgs/buluozuan.jpg"/>&nbsp;&nbsp;x&nbsp;&nbsp;10&nbsp;&nbsp;
                    <Button  bsStyle="info">立即兑换</Button>
                </p>
            </Thumbnail>
        )
    }
}
