/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'

export default class BrandItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            src : this.props.src.src,
            detail:this.props.src.detail
        }
    }

    render(){
        return(
            <span className="brandIcon">
                <img src={this.state.src}/>
                <span>{this.state.detail}</span>
            </span>
        )
    }
}