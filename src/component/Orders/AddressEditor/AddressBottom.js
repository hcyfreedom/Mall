/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'

export default class AddressBottom extends React.Component{
    render(){
        return(
            <div className="addBottom" onClick={this.props.handleClick}>
                {this.props.detail}
            </div>
        )
    }
}