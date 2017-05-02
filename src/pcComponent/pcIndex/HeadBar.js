/**
 * Created by hcy on 2017/5/2.
 */
import React from 'react'

export default class HeadBar extends React.Component{
    render(){
        return(
            <div style={{width:'100%',height:'50px',backgroundColor:'#5FCAE8',textAlign:'center',lineHeight:'50px',color:"white",fontSize:'25px'}}>
                {this.props.headBar}
            </div>
        )
    }
}