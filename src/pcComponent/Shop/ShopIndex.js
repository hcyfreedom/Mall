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
                <img src="/imgs/1.jpg"  style={{width:'100%',marginTop:'80px'}}/>
                <ShopSelector/>
            </div>
        )
    }
}