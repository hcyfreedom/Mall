/**
 * Created by hcy on 2017/4/9.
 */
import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get,post} from "../../http/http"
import * as mallActions from '../../action/mallActions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom'
class IntroBottom extends React.Component{
    constructor(props){
        super(props)
    }
    // componentWillMount(){
    //     let {introCode,introGood,introGoodId,slideIndex} = this.props.homeReducer;
    //     let actions = bindActionCreators(mallActions,this.props.dispatch);
    //     post('/good/getGoodContent/'+introGoodId,{
    //         //req没有 就不用传 否则就
    //         //goodId:xxx 一个js对象
    //     },(res) => {
    //         //成功的回调函数
    //         let data = res.data;
    //         if (data.code == 200){
    //             console.log("success")
    //             actions.getGoodContent(res.data)
    //         }else {
    //             console.log("failed")
    //         }
    //     },()=>{
    //         //失败的回调函数
    //     })
    // }

    render(){
        return(
           <div style={{position:'fixed',bottom:'0',width:'100%',height:'100px',backgroundColor:"grey",fontSize:'20px'}}>
                <div style={{width:'25%',backgroundColor:'#E5E5E5',height:'100%',float:'left',textAlign:'center'}}>
                    <img src="/imgs/1.jpg" style={{width:'40px',height:'40px',marginTop:'20px'}}/>
                    <p>联系</p>
                </div>
               <div style={{width:'25%',backgroundColor:'#E5E5E5',height:'100%',float:'left',textAlign:'center'}}>
                   <img src="/imgs/1.jpg" style={{width:'40px',height:'40px',marginTop:'20px'}}/>
                   <p>店铺</p>
               </div>
               <div style={{width:'50%',lineHeight:'100px',backgroundColor:'#0C4CA3',height:'100%',textAlign:'center',color:'white',float:'left',fontSize:'28px'}}>
                   加入购物车
               </div>
           </div>
        )
    }
}

export default  connect((state)=> state)(IntroBottom)