/**
 * Created by hcy on 2017/4/21.
 */
import React from 'react'

export default class PaymentSuccess extends React.Component{
    render(){
        return(
            <div className="paySuccess">
                <img src="/imgs/succeed.png"/>
               <div className="payBtnWrap">
                   <div className="payButton" style={{color:"grey",backgroundColor:'#d2d2d2'}}>
                       查看订单
                   </div>
                   <div className="payButton" style={{color:'white',backgroundColor:'#0c4da2'}}>
                       继续逛逛
                   </div>
               </div>
            </div>
        )
    }
}
