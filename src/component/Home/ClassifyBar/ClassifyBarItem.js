/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
export default class ClassifyItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.actions.getClassifyBar(this.props.src.src,this.props.src.detail,this.props.index)
    }


    render() {
        return (
            <span className="classifyIcon">
                <img src={this.props.src.src}/>
                <p>{this.props.src.detail}</p>
            </span>
        )
    }
}