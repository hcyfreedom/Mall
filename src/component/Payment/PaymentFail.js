/**
 * Created by hcy on 2017/4/22.
 */
import React from 'react'

export default class PaymentFail extends React.Component{
    render(){
        return(
            <div className="paySuccess">
                <img src="/imgs/failed.png"/>
                <div className="payBtnWrap">
                    <div className="payButton" style={{color:"grey",backgroundColor:'#d2d2d2'}}>
                        取消订单
                    </div>
                    <div className="payButton" style={{color:'white',backgroundColor:'#EA2735'}}>
                        返回修改付款方式
                    </div>
                </div>
            </div>
        )
    }
}
