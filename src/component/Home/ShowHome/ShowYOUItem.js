/**
 * Created by hcy on 2017/3/30.
 */
/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
import {Link} from 'react-router-dom';
export default class ShowYOUItem extends React.Component{
    constructor(pros){
        super(pros)
    }
    // componentWillMount() {
    //     this.props.actions.getShow(this.props.src.src,this.props.src.shopHref,this.props.index)
    // }

    render(){
        return(
            <span className="showIcon">
                 <div className="showBox">
                    <img src={this.props.src.src}/>
                 </div>
                <Link to={this.props.src.shopHref}><div className="showEnter">进入店铺</div></Link>
             </span>
        )
    }

}