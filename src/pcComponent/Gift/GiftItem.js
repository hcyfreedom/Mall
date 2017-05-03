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
                <h3>this.props.ele.name</h3>
                <p style={{color:"red"}}>最低实付this.props.ele.minPrice</p>
                <p>
                    <Button bsSize="xsmall" bsStyle="info">市场价：<span style={{textDecoration:'line-through'}} >￥1000</span></Button>&nbsp;
                    <Button bsSize="xsmall" bsStyle="info">唐僧价：<span style={{color:'red'}} >￥1000</span></Button>
                </p>
            </Thumbnail>
        )
    }
}
