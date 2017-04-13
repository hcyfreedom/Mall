/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'
import ClassifySecond from  '../Production/ClassifySecond'
import {Link} from 'react-router-dom'
export default class ShowBAO extends React.Component{
    render(){
        return(
            <div>
                <div className="showBanner">
                    <img src="../imgs/m2.png"/>
                    <Link to="/home/cate"><span>&nbsp;>more</span></Link>
                </div>
                <ClassifySecond/>
                <div style={{width:'100%',height:'198px'}}>

                </div>
            </div>
        )
    }
}