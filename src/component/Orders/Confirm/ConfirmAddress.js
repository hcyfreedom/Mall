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
    render(){
        return(
            <div className="conAdd">
                <img src="/imgs/add1.jpg"/>
                <div className="addDetail" style={{marginTop:'15px'}} >
                    <div className="addDetailTop">
                        <span>张三</span><span style={{paddingLeft:'100px'}}>17861486454854</span>
                    </div>
                    <div className="addDetailBottom">
                        hdweggcewgfyewgfgewyfgewgvjshvchjdsbgvhjdsbgjhdsgbvjhdsbgvchjsb
                    </div>
                </div>


                <div className="conAddGo">&gt;</div>
            </div>
        )
    }
}
export default connect((state) => state)(ConfirmAddress)