/**
 * Created by hcy on 2017/4/21.
 */
import React from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux';
import {post} from '../../http/http';
class PaymentSuccess extends React.Component {
    componentWillMount() {
        // let {lastOrder} = this.props.homeReducer;
        // if(lastOrder == undefined)
        //     lastOrder = [];
        // let result = [];
        // for (let i = 0; i < lastOrder.length; i++) {
        //     result[i] = lastOrder[i].orderId;
        // }
        // post("/good/commitOrder",{
        //     orderIds:result
        // },()=>{
        //
        // },()=>{
        //
        // })
    }

    render() {

        return (
            <div className="paySuccess">
                <img src="/imgs/succeed.png"/>
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

