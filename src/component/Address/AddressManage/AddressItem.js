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
                        <span>张三</span><span style={{paddingLeft:'100px'}}>17861486454854</span>
                    </div>
                    <div className="addDetailBottom">
                        hdweggcewgfyewgfgewyfgewgvjshvchjdsbgvhjdsbgjhdsgbvjhdsbgvchjsb
                    </div>
                </div>
                <div className="addEditor"><img src="/imgs/add3.jpg"/></div>
            </div>
        )
    }
}