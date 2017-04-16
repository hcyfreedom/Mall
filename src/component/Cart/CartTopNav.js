/**
 * Created by hcy on 2017/4/15.
 */
import React from 'react'

export default  class CartTopNav extends React.Component{
    render(){
        return(
            <div style={navStyle}>
                <div className="goBack">
                    &lt;
                </div>
                <div style={navTitle}>
                        {this.props.navTitle}
                </div>
            </div>
        )
    }
}


const navStyle = {
    width : '100%',
    height : '80px',
    background: '-webkit-linear-gradient(left, #6dddf1, #0f5ea5)',
    background: ' -o-linear-gradient(right,#6dddf1, #0f5ea5)',
    background: '-moz-linear-gradient(right,#6dddf1, #0f5ea5)', /* Firefox 3.6 - 15 */
    background: 'linear-gradient(to right,#6dddf1, #0f5ea5)', /* 标准的语法（必须放在最后） */
    position: 'fixed',
    zIndex: '300'

}
const navTitle = {
    width:"200px",
    height:"100px",
    margin:'0 auto',
    fontSize:'40px',
    color:'white',
    marginTop:'-45px',
    textAlign:'center'
}