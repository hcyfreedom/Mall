// /**
//  * Created by hcy on 2017/4/26.
//  */
// import React from 'react'
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {post,get} from "../../../http/http"
// import * as afterActions from '../../../action/afterActions'
// class OrderItems extends React.Component{
//         constructor(props){
//             super(props)
//         }
//
//         render(){
//             return(
//                 <div>
//                     <div className="orderTitle">
//                         <span>{this.props.ele.shopName}</span>
//                         <span style={this.props.ele.describeStatus = "交易中"? style.dealIng : style.dealEnd}>{this.props.ele.describeStatus}</span>
//                     </div>
//                 </div>
//             )
//         }
// }
//
// export default connect((state)=>state)(OrderItems)
//
// const style = {
//         dealIng : {
//             color:'#4fe040'
//         },
//     dealEnd:{
//         color:'#ef4036'
//     }
//
// }


/**
 * Created by hcy on 2017/4/17.
 */
import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'
class OrderItems extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="orderTitle">
                    <span style={{paddingLeft:'60px'}}>{this.props.ele.shopName}</span>
                    <span style={style}>{this.props.ele.describeStatus}</span>
                </div>
                <div style={{width:'100%',height:'189px',backgroundColor:'#f9f9f9'}}>
                    <img className="orderImg" src={this.props.ele.headImg}/>
                    <div className="orderName">{this.props.ele.name}</div>
                    <div className="orderWord">
                        <p style={{color:'#ef4036',fontSize:'28px'}}>￥{this.props.ele.newPrice}</p>
                        <p style={{textDecoration:'line-through',fontSize:'28px',color:'grey'}}>{this.props.ele.originPrice}</p>
                        <p>x&nbsp;&nbsp;{this.props.ele.goodCount}</p>
                    </div>
                </div>
                <div className="orderCar">
                    <div className="orderCarChild">
                        <img src="/imgs/dfh.png"/>查看物流
                    </div>
                </div>
            </div>
        )
    }
}
const style = {
    color:'#14d600',
    paddingRight:'60px'
}



export default connect((state) => state)(OrderItems  )
