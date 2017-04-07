/**
 * Created by hcy on 2017/4/5.
 */
import React from 'react'
export default class GoodBrandItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            src : this.props.src.src,
            detail:this.props.src.detail
        }
    }

    render(){
        return(
            <span className="goodBrandIcon">
                <img src={this.state.src}/>
                <p>{this.state.detail}</p>
            </span>
        )
    }
}