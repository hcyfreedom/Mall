/**
 * Created by hcy on 2017/4/22.
 */
import React from 'react'
import Nav from '../../Cart/CartTopNav'

import Bottom from '../AddressEditor/AddressBottom'
import ConfirmAddress from './ConfirmAddress'
import ConfirmOrder from './ConfirmOrder'
import ConfirmDelivery from './ConfirmDelivery'
import ConfirmMessage from './ConfirmMessage'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post} from '../../../http/http'
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'
class OrderConfirm extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick(){
        alert("付款接口没有给 给了之后凋一下接口 成功了之后 再回调url: good/payedOrder")
    }


    render(){
        return(
           <div>
               <Nav navTitle="确认订单"/>

               <div style={{position:"relative",top:'120px'}}>
                   <Link to="/address/manage">
                       <ConfirmAddress/>
                   </Link>
                   <ConfirmOrder/>
                   <Link to="/delivery">
                       <ConfirmDelivery/>
                   </Link>
                   <ConfirmMessage/>
               </div>
               <Bottom detail="确认下单" handleClick={this.handleClick.bind(this)}/>
           </div>
        )
    }
}
export default connect((state) => state)(OrderConfirm)


const navStyle = {
    width : '100%',
    height : '80px',
    background: '-webkit-linear-gradient(left, #6dddf1, #0f5ea5)',
    background: ' -o-linear-gradient(right,#6dddf1, #0f5ea5)',
    background: '-moz-linear-gradient(right,#6dddf1, #0f5ea5)', /* Firefox 3.6 - 15 */
    background: 'linear-gradient(to right,#6dddf1, #0f5ea5)', /* 标准的语法（必须放在最后） */
    position: 'fixed',
    zIndex: '300'

}
const navTitle = {
    width:"200px",
    height:"100px",
    margin:'0 auto',
    fontSize:'40px',
    color:'white',
    marginTop:'-45px',
    textAlign:'center'
}