/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'
import {Link} from 'react-router-dom'
export default class AddressItem extends React.Component{
    render(){
        return(
            <div className="addWrap">
                <div className="addCircleIcon"></div>
                <div className="addDetail">
                    <div className="addDetailTop">
                        <span>{this.props.ele.reciever}</span><span style={{paddingLeft:'100px'}}>{this.props.ele.recieverTelephone}</span>
                    </div>
                    <div className="addDetailBottom">
                        {this.props.ele.address}
                    </div>
                </div>
                <Link to="/address/editor">
                    <div className="addEditor"><img src="/imgs/add3.jpg"/></div>
                </Link>
            </div>
        )
    }
}