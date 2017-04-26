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
                    <p>代付款</p>
                </div>
                <div className="triZuan">
                    <img src="/imgs/dfh.png"/>
                    <p>代发货</p>
                </div>
                <div className="triZuan">
                    <img src="/imgs/dsh.png"/>
                    <p>待收货</p>
                </div>
                <div className="triZuan">
                    <img src="/imgs/wdrm.png"/>
                    <p>我的人脉</p>
                </div>

            </div>
        )
    }
}