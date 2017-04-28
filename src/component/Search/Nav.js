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

                   <div style={{display:'flex',margin:'0 auto',width:'60%'}}>
                       <input ref="searchInput" className="searchInput" style={divStyle} value={saveSearch} onChange={(event) => this.handleChange(event)}/>
                       <div className="searchWord" onClick={this.handleClick.bind(this)}>搜索</div>
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
                       <div style={{display:'flex',margin:'0 auto',width:'70%'}}>
                         <input ref="searchInput" className="searchInput" style={divStyle2} value={saveSearch} onChange={(event) => this.handleChange(event)}/>
                         <span className="searchWord" onClick={this.handleClick.bind(this)}>搜索</span>
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


const divStyle = {
    height:'48px',
    width : '80%',
    display:'inline-block',
    marginRight:'10px',
    borderRadius:'30px',
    border : '1px white solid',
    position:'relative',
    marginTop:'15px',
    backgroundColor:'transparent',
    // float:'left',
    color:"white",
    fontSize:'28px',
    paddingLeft:'60px',
    background:'url(/imgs/searchIcon.png) 20px 10px no-repeat',
    // marginLeft:'260px',
    outline:'medium'
}
const divStyle2 = {
    height:'48px',
    width : '80%',
    display:'inline-block',
    marginRight:'10px',
    borderRadius:'30px',
    border : '1px white solid',
    position:'relative',
    marginTop:'15px',
    backgroundColor:'transparent',
    // float:'left',
    color:"white",
    fontSize:'28px',
    paddingLeft:'60px',
    background:'url(/imgs/searchIcon.png) 20px 10px no-repeat',
    // marginLeft:'100px',
    outline:'medium'

}
