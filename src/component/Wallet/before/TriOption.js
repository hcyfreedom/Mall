/**
 * Created by hcy on 2017/4/21.
 */
import React from 'react'

export default class TriOption extends React.Component{
    render(){
        return(
            <div className="tribeWrap" style={{marginTop:'20px'}} onClick={this.props.click}>
                <div className="triZuan">
                    <img src="/imgs/dfk.png"/>
                    <p>待付款</p>
                </div>
                <div className="triZuan">
                    <img src="/imgs/dfh.png"/>
                    <p>待发货</p>
                </div>
                <div className="triZuan">
                    <img src="/imgs/dsh.png"/>
                    <p>待收货</p>
                </div>
                <div className="triZuan">
                    <img src="/imgs/wdrm.png"/>
                    <p>酋长之路</p>
                </div>

            </div>
        )
    }
}