/**
 * Created by hcy on 2017/5/3.
 */
import React from 'react'
import Nav from '../NavBar/NavDetail'
import Items from '../Classify/ClassifyItems'
export default class SearchOut extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <div style={{display:'flex',justifyContent:'space-around',marginTop:'150px'}}>
                    <Items/>
                    <Items/>
                    <Items/>
                    <Items/>
                </div>
            </div>
        )
    }
}