/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'

export default class Block extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="block">
                <img src={this.props.src}/>
            </div>
        )
    }
}