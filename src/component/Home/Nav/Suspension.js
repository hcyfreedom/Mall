/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'

export  default class Suspension extends React.Component{
    constructor(){
        super()
        this.state = {
            src:"../imgs/1.jpg",
            coin:"16555",
            grade:'16558',
            detail:"可当4667元使用哦~"
        }
    }

    render(){
        return(
            <div className="SusWrap">
                <img src={this.state.src}/>
                <div className="SusCircle"> </div>部落币
                <div className="SusCoin">
                    <div className="SusCoinChild">
                        {this.state.coin}
                    </div>
                </div>
                <div className="SusGradeCircle"> </div>部落分
                <div className="SusGrade">
                    <div className="SusGradeChild">
                        {this.state.grade}
                    </div>
                </div>
                <p className="SusDetail">{this.state.detail}</p>
            </div>
        )
    }
}