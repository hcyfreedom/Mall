/**
 * Created by hcy on 2017/4/21.
 */
import React from 'react'
import {Link} from 'react-router-dom'

export default class TriOption extends React.Component{
    render(){
        return(
            <div className="tribeWrap" style={{marginTop:'20px'}} onClick={this.props.click}>
                <Link  to="/orderPage/0" className="triZuan">
                    <img src="/imgs/dfk.png"/>
                    <p>全部订单</p>
                </Link>
                <Link to="/orderPage/1" className="triZuan">
                    <img src="/imgs/dfh.png"/>
                    <p>待付款</p>
                </Link>
                <Link to="/orderPage/2" className="triZuan">
                    <img src="/imgs/dsh.png"/>
                    <p>待收货</p>
                </Link>
                <div className="triZuan">
                    <img src="/imgs/wdrm.png"/>
                    <p>酋长之路</p>
                </div>

            </div>
        )
    }
}