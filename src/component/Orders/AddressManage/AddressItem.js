/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as mallActions from '../../../action/mallActions'
import {bindActionCreators} from 'redux';

class AddressItem extends React.Component{
    handleClick(element){

        let actions = bindActionCreators(mallActions,this.props.dispatch);
        actions.getDefaultAddress(element);
        this.props.history.go(-1);
    }
    render(){

        return(
            <div className="addWrap"  >
                {/*<div className="addCircleIcon"></div>*/}
                <div className="addDetail" onClick={()=>{this.handleClick(this.props.ele)}}>
                    <div className="addDetailTop">
                        <span>{this.props.ele.reciever}</span><span style={{paddingLeft:'100px'}}>{this.props.ele.recieverTelephone}</span>
                    </div>
                    <div className="addDetailBottom">
                        {this.props.ele.address}
                    </div>
                </div>
                <Link to={"/address/editor/"+this.props.ele.id}>
                    <div className="addEditor"><img src="/imgs/add3.jpg"/></div>
                </Link>
            </div>
        )
    }
}

export default connect((state)=>state)(AddressItem)