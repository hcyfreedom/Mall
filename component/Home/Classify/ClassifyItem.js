/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
export default class ClassifyItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            src : this.props.src.src,
            detail:this.props.src.detail
        }
    }

    render(){
        return(
            <span className="classifyIcon">
                <img src={this.state.src}/>
                <p>{this.state.detail}</p>
            </span>
        )
    }
}