/**
 * Created by hcy on 2017/4/8.
 */
import React from 'react'
import Intro from './Information/Intro'
export default class Information extends React.Component{
    render(){
        return(
            <div>
                <Intro pathParams={this.props.match.params}/>
            </div>
        )
    }
}