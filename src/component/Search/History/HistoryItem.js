/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
export default class HistoryItem extends React.Component{
    constructor(pros){
        super(pros)
    }

    componentWillMount() {
        this.props.actions.getHistory(this.props.src.history,this.props.src.href,this.props.index)
    }

    render(){

        return(
            <div className="historySe" ><span>{this.props.src.history}</span></div>
        )
    }

}