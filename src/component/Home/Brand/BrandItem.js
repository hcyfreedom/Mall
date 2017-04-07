/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
export default class BrandItem extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.actions.getBrand(this.props.element.src,this.props.element.detail,this.props.index)
    }

    render(){
        return(
            <span className="brandIcon">
                <img src={this.props.element.src}/>
                <span>{this.props.element.detail}</span>
            </span>
        )
    }
}