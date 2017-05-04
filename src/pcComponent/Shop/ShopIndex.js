/**
 * Created by hcy on 2017/5/3.
 */
import React from 'react'
import Nav from '../NavBar/NavDetail'
import ShopSelector from './ShopSelector'

export default class ShopIndex extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <img src="/imgs/872EC922-8787-4E14-B5D1-241F1BCA27BE.png"  style={{width:'100%',marginTop:'150px'}}/>
                <ShopSelector/>
            </div>
        )
    }
}