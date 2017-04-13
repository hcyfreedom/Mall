/**
 * Created by hcy on 2017/4/9.
 */
import React from 'react'
import ShowBottom from '../Shop/ShowBottom'

import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom'
export default class IntroBottom extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
                <div className="introBottom">
                    <ShowBottom/>
                    <Link to="/shop/index"> <RaisedButton label="店铺" style={introBottom} className="introBottomSpan"/>
                        <img src="/imgs/a1.png" style={{position:'absolute',top:"5px",left:"280px",width:'50px',height:"40px",zIndex:'9'}}/>
                    </Link>
                    <div className="introAdd">加入购物车</div>
                </div>
            </MuiThemeProvider>
        )
    }
}

const introBottom = {
    width:'20%',
    backgroundColor:'#e5e5e5',
    border:"none",
    height:"80px",
    textAlign:"left",
    position:"relative",
    bottom:'80px',
    left:'21%'
}