/**
 * Created by hcy on 2017/5/2.
 */
import React from 'react'
import HeadBar from './HeadBar'
import IndexItem from './IndexItem'

export default class IndexPart extends React.Component{
    render(){
        return(
            <div style={{width:'30%'}}>
                <HeadBar headBar="保健坊"/>
                <IndexItem/>
            </div>
        )
    }
}