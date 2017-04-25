/**
 * Created by hcy on 2017/4/22.
 */
import React from 'react'
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
    handleGoBack(){
//         let actions = bindActionCreators(mallActions,this.props.dispatch);
//         actions.targetOrders();
//         let {confirmOrders} = this.props.homeReducer;
//         let orderIds =[];
//         for(let i = 0;i<confirmOrders.length;i++){
//             for(let key in confirmOrders[i]){
//                 orderIds.push(confirmOrders[i].orderId)
//             }
//         }
//         let orderIdList = [];
//         const s = new Set();
//         orderIds.forEach(item => s.add(item));
//         for(let i of s){
//             orderIdList.push(i);
//         }
// console.log(orderIdList)
//         post('/good/abandonOrder',{
//             //req没有 就不用传 否则就
//             //goodId:xxx 一个js对象
//             orderIds:orderIdList
//
//         },(res) => {
//             //成功的回调函数
//             let data = res.data;
//             if (data.code == 200){
//                 console.log("success")
//             }else {
//                 console.log("failed")
//             }
//         },()=>{
//             //失败的回调函数
//         })
        window.history.go(-1)
    }


    handleClick(){
        alert("付款接口没有给 给了之后凋一下接口 成功了之后 再回调url: good/payedOrder")
    }


    render(){
        return(
           <div>
               <div style={navStyle}>
                   <div className="goBack" onClick={this.handleGoBack.bind(this)}>
                       &lt;
                   </div>
                   <div style={navTitle}>
                       确认订单
                   </div>
               </div>
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