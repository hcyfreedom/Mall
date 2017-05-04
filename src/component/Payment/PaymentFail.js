/**
 * Created by hcy on 2017/4/22.
 */
import React from 'react'
import {Link} from "react-router-dom"
import PcFail from '../../pcComponent/Payment/PayFailed'

export default class PaymentFail extends React.Component {
    render() {
        const result = matchMedia('(orientation: landscape)').matches;
        if(result)
            return this.pcRender()
        return this.mobRender();
    }
    pcRender(){
        return(
            <PcFail/>

        )
    }

    mobRender() {
        return (
            <div className="paySuccess">
                <img src="/imgs/ts.png"/>
                <div className="payBtnWrap">
                    <Link to="/">
                        <div className="payButton" style={{color:"grey",backgroundColor:'#d2d2d2'}}>
                            取消订单
                        </div>
                    </Link>
                    <Link to="/home/cart">
                        <div className="payButton" style={{color:'white',backgroundColor:'#EA2735'}}>
                            返回修改付款方式
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
