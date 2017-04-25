/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
export default class ClassifyItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <div>
               <div className="classifyIcon">
                   <img src={this.props.src.classifyImg}/>
               </div>
               <p className="classifyIconP">{this.props.src.classifyName}</p>
           </div>
        )
    }
}