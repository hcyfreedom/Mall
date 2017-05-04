/**
 * Created by hcy on 2017/5/3.
 */
/**
 * Created by hcy on 2017/5/3.
 */
import React from 'react'
import Item from './ShopItems'

export default class ShopAllProduction extends React.Component{
    render(){
        return(
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>

            </div>
        )
    }
}