/**
 * Created by hcy on 2017/4/17.
 */
import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post} from "../../http/http"
import * as mallActions from '../../action/mallActions'
class CartItems extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){

    }


    handlePlusClick(){
        let {orderCount,ordersInCart} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let index = this.props.index;


        const plusCount = this.props.ele.goodCount + 1;
        post('/good/changeOrderCount/'+this.props.ele.goodId,{
            //req没有 就不用传 否则就
            //goodId:xxx 一个js对象
            count: plusCount
        },(res) => {
            //成功的回调函数

            let data = res.data;

            if (data.code == 200){
                let payload = {
                    count:res.data.msg.count,
                    index: index
                }
                actions.changeOrderCount(payload)
            }else {
                console.log("failed")
            }

        },()=>{
            //失败的回调函数
        })


    }

    handleSubClick(){
            let {orderCount,ordersInCart} = this.props.homeReducer;
            let actions = bindActionCreators(mallActions,this.props.dispatch);
            let index = this.props.index;


            const subCount = this.props.ele.goodCount - 1;
            post('/good/changeOrderCount/'+this.props.ele.goodId,{
                //req没有 就不用传 否则就
                //goodId:xxx 一个js对象
                count: subCount
            },(res) => {
                //成功的回调函数
                let data = res.data;

                if (data.code == 200){
                    let payload = {
                        count:res.data.msg.count,
                        index: index
                    }
                    console.log("success")
                    actions.changeOrderCount(payload)
                }else {
                    console.log("failed")
                }

            },()=>{
                //失败的回调函数
            })



    }

    deleteClick(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let index = this.props.index;

        post('/good/deleteGoodFromCart',{
                orderId:this.props.ele.goodId
        },(res) => {
            if (res.data.code == 200){
                let payload = {
                    index:index
                }
                actions.deleteAfter(payload)
                console.log("delete success!")
            }else {
                console.log("delete failed")
            }
        })
    }

        render(){
        let {cartCircleIcon,cartDelete} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        return(
            <div>
                <div className="cartWrap">
                    <div className="cartItems">
                        <div className="cartCircleIcon"
                             style={{backgroundColor : this.props.selectedID.has(this.props.ele.goodId) ?　'#ee4037' : 'transparent' }}
                             onClick={() => this.props.select(this.props.ele.goodId)}
                            ref={this.props.ele.goodId} >
                        </div>
                        <Link to={'/information/' + this.props.ele.shopId + this.props.ele.goodId} >
                            <div className="cartBody">
                                <img className="cartImg" src="/imgs/a1.png"/>
                                <div className="cartContent">
                                    <div className="carItemsTitle">{this.props.ele.name}</div>
                                    <div className="carItemsReal">￥{this.props.ele.newPrice}</div>
                                    <div className="cartItemsLow">最低实付￥{this.props.ele.minPrice}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="changeWrap" >
                        <div className="changeSub" onClick={this.handleSubClick.bind(this)}> - </div>
                        <div className="changeCount">{this.props.ele.goodCount}</div>
                        <div className="changePlus" onClick={this.handlePlusClick.bind(this)}> + </div>
                    </div>
                    <div className="cartDelete" style={cartDelete} onClick={this.deleteClick.bind(this)}>
                        删&nbsp;&nbsp;除
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => state)(CartItems  )
