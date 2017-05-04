/**
 * Created by hcy on 2017/5/3.
 */
/**
 * Created by hcy on 2017/5/3.
 */
import React from 'react'
import Item from './ShopItems'

export default class ShopMian extends React.Component{
    render(){
        return(
            <div>
                <div className="block">
                    <img src="/imgs/872EC922-8787-4E14-B5D1-241F1BCA27BE.png"/>
                </div>
                <div style={{display:'flex',justifyContent:'space-around',marginTop:'50px'}}>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>

                </div>
            </div>
        )
    }
}