/**
 * Created by hcy on 2017/4/20.
 */
import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <div className="waHeader">
                <div className="headImg">
                    <img src="/imgs/headIcon.png"/>
                </div>
                <div className="headLoad">登录/注册</div>
            </div>
        )
    }
}