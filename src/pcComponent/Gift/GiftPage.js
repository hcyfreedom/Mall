/**
 * Created by hcy on 2017/5/3.
 */
import React from 'react'
import NavDetail from '../NavBar/NavDetail'
import GiftItem from './GiftItem'

export default class GiftPage extends React.Component{
    render(){
        return(
            <div>
                <NavDetail/>
                <div style={{display:'flex',justifyContent:'space-around',marginTop:'150px'}}>
                    <GiftItem/>
                    <GiftItem/>
                    <GiftItem/>
                    <GiftItem/>

                </div>
            </div>
        )
    }
}