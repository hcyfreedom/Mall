/**
 * Created by hcy on 2017/3/28.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {Switch, HashRouter as Router, Route, Redirect, Link} from 'react-router-dom';

export default class Nav extends React.Component{
    constructor(){
        super();
        this.state = {
            value : '富硒康'
        }

    }

    handleChange(event){
        this.setState({
            value : event.target.value

        })

    }
    handleClick(){
        const input = ReactDOM.findDOMNode(this.refs.searchInput);
        const searchInput = input.value;
        console.log(searchInput)
        if(searchInput !==""){
            window.location.href = "http://localhost:3001/search/out"
        }else {
            alert("请输入搜索内容")
        }

    }


    render(){
        const path = this.props.location.pathname;

       if(path=="/home/index"){
           return(
               <div style={navStyle}>
                   <Link to="/search/index">
                       <div style={parentStyle}>
                           <div style={divStyle} >
                               <img src="../imgs/searchIcon.png" style={imgStyle}/>
                               <input  style={searchStyle} value={this.state.value} onChange={(event) => this.handleChange(event)}/></div>搜索
                       </div>
                   </Link>
               </div>
           )
       }else {
           return(
               <div>
                   <div style={navStyle}>
                       <div style={parentStyle}>
                           <div style={divStyle2} >
                               <img src="../imgs/searchIcon.png" style={imgStyle}/>
                               <input ref="searchInput" style={searchStyle2} value={this.state.value} onChange={(event) => this.handleChange(event)}  /></div>
                           <span onClick={this.handleClick.bind(this)}>搜索</span>
                       </div>
                   </div>
               </div>
           )
       }
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
    lineHeight:'80px',
    marginRight :'20px',
    fontSize:'60px'
}

const divStyle = {
    height:'48px',
    width : '420px',
    display:'inline-block',
    marginRight:'10px',
    borderRadius:'30px',
    border : '1px white solid',
    position:'relative'
}
const divStyle2 = {
    height:'48px',
    width : '720px',
    display:'inline-block',
    marginRight:'10px',
    borderRadius:'30px',
    border : '1px white solid',
    position:'relative'
}
const searchStyle = {
    width:'375px',
    height:'48px',
    lineHeight:'80px',
    outline : 'medium',
    color:'white',
    fontSize:'28px',
    backgroundColor:'transparent',
    float:'right',
    border:'none'
}
const searchStyle2 = {
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