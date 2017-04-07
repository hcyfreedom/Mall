/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'
import Production from  '../Production/Production'

export default class ShowBAO extends React.Component{
    render(){
        return(
            <div>
                <div className="showBanner">
                    <img src="../imgs/m2.png"/>
                    <span>&nbsp;>more</span>
                </div>
                <Production/>
                <div style={{width:'100%',height:'198px'}}>

                </div>
            </div>
        )
    }
}