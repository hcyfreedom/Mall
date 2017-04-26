/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
export default class HistoryItem extends React.Component{
    constructor(pros){
        super(pros)
    }

    render(){

        return(
            <div className="historySe" ><span>{this.props.ele.item}</span></div>
        )
    }

}