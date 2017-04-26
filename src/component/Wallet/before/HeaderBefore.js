/**
 * Created by hcy on 2017/4/20.
 */
import React from 'react'
import {Link} from 'react-router-dom'
export default class Header extends React.Component{
    render(){
        return(
            <div className="waHeader">
                <div className="headImg">
                    <img src="/imgs/headIcon.png"/>
                </div>
                <Link to="/register"><div className="headLoad">注册</div>
                </Link>
                <Link to="/login"><div className="headLoad">登录</div>
                </Link>
            </div>
        )
    }
}