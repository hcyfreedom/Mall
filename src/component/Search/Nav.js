/**
 * Created by hcy on 2017/3/28.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../http/http"
import * as afterActions from '../../action/afterActions'

 class Nav extends React.Component{
    constructor(props){
        super(props);
            }

    componentWillMount(){
        let {saveSearch} = this.props.afterReducer;
    }


    handleChange(event){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
       actions.saveSearch(event.target.value)

    }
    handleClick(){
        let {saveSearch} = this.props.afterReducer;

        let actions = bindActionCreators(afterActions,this.props.dispatch)
        post('/good/search',{
            //req没有 就不用传 否则就
            //goodId:xxx 一个js对象
            goodName: saveSearch
        },(res) => {
            //成功的回调函数

            if(saveSearch !==""){
                actions.searchOut(res.data);
                let payload = {
                    item : saveSearch
                };
                actions.historySave(payload);
                actions.jumpFlag();
            }else {
                alert("请输入搜索内容")
            }

        },()=>{
            //失败的回调函数
        })




    }


    render(){
        const path = this.props.location.pathname;
        let {saveSearch,jump} = this.props.afterReducer;


        if(path=="/home/index"){
           return(
               <div style={navStyle}>
                   <Link to="/search/index">
                       <div style={parentStyle}>
                           <div style={divStyle} >
                               <img src="../imgs/searchIcon.png" style={imgStyle}/>
                               <input  style={searchStyle} value={saveSearch} onChange={(event) => this.handleChange(event)}/></div>搜索
                       </div>
                   </Link>
               </div>
           )
       }else {
           return(
               <div>
                   {jump ?　<Redirect to="/search/out" /> : null}
                   <div style={navStyle}>
                       <Link to="/search/index">
                           <div style={parentStyle}>
                               <div style={divStyle2} >
                                   <img src="../imgs/searchIcon.png" style={imgStyle}/>
                                   <input ref="searchInput" style={searchStyle2} value={saveSearch} onChange={(event) => this.handleChange(event)}  /></div>
                               <span onClick={this.handleClick.bind(this)}>搜索</span>
                           </div>
                       </Link>
                   </div>

               </div>
           )
       }
    }
}

export default connect((state) => state)(Nav)

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