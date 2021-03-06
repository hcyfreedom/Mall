/**
 * Created by hcy on 2017/4/20.
 */
import React from 'react'
import Nav from '../../Cart/CartTopNav'
import HeaderBefore from './HeaderBefore'
import Tribe from './Tribe'
import TriOption from './TriOption'
export default class Wallet extends React.Component{

    constructor(props){
        super(props)
    }

    handleClick(){
        alert("请登录")
    }
    render(){
        return(
            <div>
                <Nav navTitle="我的行囊"/>
                <div style={{position:'relative',top:'79px' }}>
                    <HeaderBefore/>
                    <Tribe/>
                    <TriOption click={this.handleClick.bind(this)}/>
                </div>
            </div>
        )
    }
}