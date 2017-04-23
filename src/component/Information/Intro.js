/**
 * Created by hcy on 2017/4/8.
 */
/**
 * Created by hcy on 2017/4/7.
 */
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
import IntroDetail from './IntroDetail'
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import AddToCar from './AddToCar'
import {Link} from 'react-router-dom'
import ShowBlock from "../Shop/ShowBlock"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get,post} from "../../http/http"
import * as mallActions from '../../action/mallActions'

class Intro extends React.Component{
    constructor(props){
        super(props);

    }
    componentWillMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let pathName =this.props.pathParams.id;
        get('/good/getGoodContent/'+pathName,(res) => {
            //成功的回调函数
            let data = res.data;
            if (data.code == 200){
                console.log("success")
                actions.getGoodContent(res.data)
            }else {
                console.log("failed")
            }
        },()=>{
            //失败的回调函数
        })
    }

    handleTouchTap(){
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        actions.changeOpenTrue()
    };

    handleRequestClose(){
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        actions.changeOpenFalse();
    };

    handleChange(value){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        actions.getSileIndex(value);
    };
    handleClick(){
        window.history.go(-1)
    }
    render(){
        console.log(this.props)

        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let {introDetail,slideIndex,contentImg,introContent,introShopId,introPrice,introTsprice,introSales,introLow,introShopTel,open} = this.props.homeReducer;
        return(
            <MuiThemeProvider>
                <div>
                    <div style={{width:'100%',backgroundColor:'#00BCD4',height:'80px'}}>
                        <span className="goBack"  onClick={this.handleClick.bind(this)}>&lt;</span>
                        <div style={{width:'50%',margin:'0 auto',position:'absolute',left:'25%',top:'0'}}>
                            <Tabs onChange={this.handleChange.bind(this)} value={slideIndex} style={{height:'80px'}} >
                                <Tab label="介绍" value={0} style={{height:'80px'}}/>
                                <Tab label="详情" value={1} style={{height:'80px'}}/>
                            </Tabs>
                        </div>
                        <SwipeableViews index={slideIndex} onChangeIndex={this.handleChange.bind(this)} style={{position:"relative"}}>
                            <div>
                                <img src={contentImg} style={{width:"100%",height:'400px',backgroundColor:'white'}}/>
                                <div className="introWrap">
                                    <div className="introOne">
                                        <div className="introDetail">{introDetail}</div>
                                        <ShowBlock/>
                                    </div>
                                    <div className="introTwo">
                                        <div className="introTsprice" style={{fontSize:'28px'}}>市场价：<span style={{textDecoration:'line-through'}}>￥{introPrice}</span></div>
                                        <div style={{fontSize:'30px'}}>唐僧价：<span style={{color:'red'}}>￥{introTsprice}</span></div>
                                    </div>
                                    <div className="introThree">
                                        <div style={{fontSize:'20px'}}>已销售{introSales}件</div>
                                        <div className="introLow">最低实付￥{introLow}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="introTitle">
                                    {introDetail}
                                </div>
                                <div className="introWord">
                                    {introContent}
                                </div>
                            </div>
                        </SwipeableViews>
                    </div>
                    <div style={{position:'fixed',bottom:'0',width:'100%',height:'100px',backgroundColor:"grey",fontSize:'20px'}}>
                        <div style={{width:'25%',backgroundColor:'#E5E5E5',height:'100%',float:'left',textAlign:'center'}} onTouchTap={this.handleTouchTap.bind(this)}>
                            <img src="/imgs/1.jpg" style={{width:'40px',height:'40px',marginTop:'20px'}}/>
                            <p>联系</p>
                        </div>
                        <Snackbar
                            open={open}
                            message={introShopTel}
                            autoHideDuration={4000}
                            onRequestClose={this.handleRequestClose.bind(this)}
                            style={{textAlign:'center'}}
                        />
                        <Link to={"/shop/"+introShopId}>
                            <div style={{width:'25%',backgroundColor:'#E5E5E5',height:'100%',float:'left',textAlign:'center'}}>
                                <img src="/imgs/1.jpg" style={{width:'40px',height:'40px',marginTop:'20px'}}/>
                                <p>店铺</p>
                            </div>
                        </Link>
                        <AddToCar/>
                    </div>

                </div>

             </MuiThemeProvider>

        )
    }

}
export default connect((state)=>state)(Intro)