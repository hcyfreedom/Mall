/**
 * Created by hcy on 2017/5/3.
 */
import React from 'react'
import NavDetail from '../NavBar/NavDetail'
import ClassifyItems from './ClassifyItems'
export default class ClassifyHome extends React.Component{
    render(){
        return(
            <div>
                <NavDetail/>
                <div style={{display:'flex',justifyContent:'space-around',marginTop:'150px'}}>
                    <ClassifyItems/>
                    <ClassifyItems/>
                    <ClassifyItems/>
                    <ClassifyItems/>

                </div>
            </div>
        )
    }
}