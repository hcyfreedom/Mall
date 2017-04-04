/**
 * Created by hcy on 2017/3/30.
 */
/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'

export default class ShowYOUItem extends React.Component{
    constructor(pros){
        super(pros)
        this.state = {
            src : this.props.src.src,
        }
    }
    render(){
        return(
            <span className="showIcon">
                 <div className="showBox">
                    <img src={this.state.src}/>
                 </div>
                 <div className="showEnter">进入店铺</div>
             </span>
        )
    }

}