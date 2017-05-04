/**
 * Created by hcy on 2017/4/21.
 */
import React from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux';
import {post} from '../../http/http';
import PcSuccess from '../../pcComponent/Payment/PaySuccess'

class PaymentSuccess extends React.Component {
    render() {
        const result = matchMedia('(orientation: landscape)').matches;
        if(result)
            return this.pcRender()
        return this.mobRender();
    }
    pcRender(){
        return(
            <PcSuccess/>
        )
    }

    mobRender() {

        return (
            <div className="paySuccess">
                <img src="/imgs/ts.png"/>
                <div className="payBtnWrap">
                    <Link to="/orderPage">
                        <div className="payButton" style={{color:"grey",backgroundColor:'#d2d2d2'}}>
                            查看订单
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="payButton" style={{color:'white',backgroundColor:'#0c4da2'}}>
                            继续逛逛
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default connect((state)=> {
    return state
})(PaymentSuccess)

