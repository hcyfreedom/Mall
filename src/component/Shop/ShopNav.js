/**
 * Created by hcy on 2017/4/6.
 */
/**
 * Created by hcy on 2017/3/28.
 */
import React from 'react'
import {Link} from 'react-router-dom';

import {BrowserRouter as Router, Route, Switch,Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'


const history = createHistory()
export default class ShopNav extends React.Component{
    constructor(){
        super();
        this.state = {
            value : '店内搜索'
        }
    }

    handleChange(event){
        this.setState({
            value : event.target.value
        })
    }
    handleClick(){
        history.go(-1)
    }

    render(){
        return(
            <div style={navStyle}>
                <div className="goBack" onClick={this.handleClick.bind(this)}>
                    <img src="/imgs/leftArrow.png"/>
                </div>
                    <div style={divStyle} >
                        <img src="/imgs/searchIcon.png" style={imgStyle}/>
                        <input className="searchInput" style={divStyle2} value={this.state.value} onChange={(event) => this.handleChange(event)}/>
                    <span className="searchWord">搜索</span></div>
            </div>



        )
    }
}

const navStyle = {
    width : '100%',
    height : '80px',
    background: '-webkit-linear-gradient(left, #6dddf1, #0f5ea5)',
    background: ' -o-linear-gradient(right,#6dddf1, #0f5ea5)',
    background: '-moz-linear-gradient(right,#6dddf1, #0f5ea5)', /* Firefox 3.6 - 15 */
    background: 'linear-gradient(to right,#6dddf1, #0f5ea5)', /* 标准的语法（必须放在最后） */
    position: 'fixed',
    zIndex: '300'

}

const parentStyle = {
    float:'right',
    color:'white',
    // lineHeight:'80px',
    marginRight :'20px',
    fontSize:'28px'
}
const divStyle = {
    height:'48px',
    width : '720px',
    display:'inline-block',
    marginRight:'10px',
    marginTop:'15px',
    borderRadius:'30px',
    border : '1px white solid',
    position:'relative'
}
const searchStyle = {
    width:'675px',
    height:'48px',
    lineHeight:'80px',
    outline : 'medium',
    color:'white',
    fontSize:'28px',
    backgroundColor:'transparent',
    float:'right',
    border:'none'
}

const imgStyle = {
    display:'inline-block',
    position:'absolute',
    top:'10px',
    left:'10px'
}