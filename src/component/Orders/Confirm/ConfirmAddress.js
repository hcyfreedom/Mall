/**
 * Created by hcy on 2017/4/22.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post} from '../../../http/http'
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'

class ConfirmAddress extends React.Component{

    componentDidMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);

        get('/account/getDefaultAddress',(res)=>{
            actions.getDefaultAddress(res.data.msg)
        })
    }

    render(){
        let {defaultAddress} = this.props.homeReducer;
        if(defaultAddress == null || defaultAddress == undefined || defaultAddress == []){
            defaultAddress = {
                reciever:"不存在地址",
                recieverTelephone:"",
                address:""
            }
        }
        return(
            <div className="conAdd">
                <img src="/imgs/add1.jpg"/>
                <div className="addDetail" style={{marginTop:'15px'}} >
                    <div className="addDetailTop">
                        <span>{defaultAddress.reciever}</span><span style={{paddingLeft:'100px'}}>{defaultAddress.recieverTelephone}</span>
                    </div>
                    <div className="addDetailBottom">
                        {defaultAddress.address}
                    </div>
                </div>


                <div className="conAddGo">&gt;</div>
            </div>
        )
    }
}
export default connect((state) => state)(ConfirmAddress)