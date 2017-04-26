/**
 * Created by hcy on 2017/4/26.
 */
/**
 * Created by hcy on 2017/4/11.
 */
import React from 'react'
import {Link} from 'react-router-dom'
export default class SearchItems extends React.Component{
    constructor(pros){
        super(pros)
    }

    render(){


        return(
            <div className="cartWrap">
                <div className="cartItems">
                    <Link to={'/information/' + this.props.ele.shopId +'/'+ this.props.ele.id} >
                        <div className="cartBody">
                            <img className="cartImg" src="/imgs/a1.png" style={{paddingLeft:'60px'}}/>
                            <div className="cartContent">
                                <div className="carItemsTitle">{this.props.ele.name}</div>
                                <div className="carItemsReal">￥{this.props.ele.newPrice}</div>
                                <div className="cartItemsLow">最低实付￥{this.props.ele.minPrice}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

}