/**
 * Created by hcy on 2017/4/25.
 */
import React from 'react'
import {Link} from 'react-router-dom'

export default class GiftBagItems extends React.Component{
    render(){
        return(
            <Link to={'giftsBagMall/'+this.props.ele.id}>
                <div className="gift">
                    <img src={this.props.ele.thumbnail}/>
                </div>
            </Link>
        )
    }
}