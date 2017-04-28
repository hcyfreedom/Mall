/**
 * Created by hcy on 2017/4/8.
 */
/**
 * Created by hcy on 2017/4/7.
 */
import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get,post} from "../../http/http"
import * as mallActions from '../../action/mallActions'

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AddToCar extends React.Component{
    constructor(props){
        super(props);

    }
    componentWillMount(){

    }

    handleClick(){
        let {addToCartCount} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let path = window.location.pathname;
        let goodId = path.split("/")[3];

        post('/good/addGoodToCart',{
            //req没有 就不用传 否则就
            //goodId:xxx 一个js对象
            goodId:goodId
        },(res) => {
            //成功的回调函数
            let data = res.data;
            if (data.code == 200){
                console.log("add to cart success")
                actions.addGoodToCart(res.data)
            }else {
                console.log("add to cart failed")
            }
        },()=>{
            alert("加入购物车失败，请先登录！")
        })

    }
    render(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let {addToCartCount,badge} = this.props.homeReducer;
        console.log(addToCartCount)
        console.log(badge)
        return(
            <MuiThemeProvider>
                <div  onClick={this.handleClick.bind(this)}>
                    <div style={{width:'50%',lineHeight:'100px',backgroundColor:'#0C4CA3',height:'100%',textAlign:'center',color:'white',float:'left',fontSize:'28px'}}>
                        加入购物车
                    </div>
                    <Badge
                        badgeContent={addToCartCount}
                        primary={true}
                        style={badge}
                        badgeStyle={{fontSize:'1.4em',width:'40px',height:'40px',right:'-20px'}}
                    >
                        <NotificationsIcon />
                    </Badge>
                </div>
            </MuiThemeProvider>
        )
    }

}
// const badge = {
//     position:'absolute',
//     bottom:'20px',
//     right:'50px',
//      display:'none'
// }

export default connect((state)=>state)(AddToCar)