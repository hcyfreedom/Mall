/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'
import AddressItem from './AddressItem'
import AddressBottom from '../AddressBottom'
export default class Address extends React.Component{
    render(){
        return(
                <div style={{position:'relative',top:'100px'}}>
                    <div className="addTitle"><img src="/imgs/add1.jpg"/>管理收货地址</div>
                    <AddressItem/>
                    <AddressItem/>
                    <div className="addNew"><img src="/imgs/add2.jpg"/>新增收货地址</div>
                    <AddressBottom detail="确认并返回"/>
                </div>

        )
    }
}