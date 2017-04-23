/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AddressBottom from './AddressBottom'
export default class AddressEditor extends React.Component{
    constructor(props) {
        super(props);
    }
handleClick(){
        window.history.go(-1);
}
    render(){
        return(
            <MuiThemeProvider>
                <div style={{position:'relative',top:'100px'}}>
                    <div className="addTitle" style={{textAlign:'center'}}>编辑收货地址</div>
                    <ul>
                        <li>收件人：<input className="inputAdd" style={styles.one} value="张三"/></li>
                        <li>收货地址：<input className="inputAdd" style={styles.two}  value="和未婚夫 bfhefhweuhfbvhfdbvhjbdvhsiGV热风GVrefer"/></li>
                        <li>联系电话：<input className="inputAdd" style={styles.three} value="11111111111"/></li>
                        <li>邮编：<input className="inputAdd" style={styles.four} value="10000"/></li>
                        <li style={{position:'relative'}}>设为默认收货地址：
                                <span>
                                    <Toggle
                                        defaultToggled={true}
                                        style={styles.toggle}
                                    />
                                </span>
                        </li>
                    </ul>
                    <AddressBottom detail="保存并返回" handleClick={this.handleClick.bind(this)}/>
                </div>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    toggle: {
        width:'20%',
        left:'700px',
        top:'-60px'
    },
    one:{
        paddingLeft:'60px'
    },
    two:{
        paddingLeft:'30px'
    },
    three:{
        paddingLeft:'30px'
    },
    four:{
        paddingLeft:'90px'
    }
};