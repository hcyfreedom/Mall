/**
 * Created by hcy on 2017/5/1.
 */
import React from 'react'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Login/Register'

export default class NavDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }


    render(){
        return(
            <div style={{position:'fixed',top:'0',width:'100%',zIndex:'1'}}>
                <Navbar  collapseOnSelect>
                    <Navbar.Toggle />

                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">用户名</NavItem>
                            <NavItem eventKey={2} href="#">我的订单</NavItem>

                            <NavDropdown eventKey={3} title="我的部落" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>部落钻：10</MenuItem>
                                <MenuItem eventKey={3.2}>部落分：10</MenuItem>
                                <MenuItem eventKey={3.3}>部落币：10</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={5} title="手机商城" id="basic-nav-dropdown">
                                <MenuItem eventKey={5.1}><img src="/imgs/1.jpg" style={{width:'100px',height:'100px'}} /></MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={4}>
                                <Login/>
                            </NavItem>
                            <NavItem eventKey={4}>
                                <Register/>
                            </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{marginTop:'-20px'}}>
                    <Navbar  collapseOnSelect style={{height:'70px',background:'linear-gradient(to right,#6dddf1, #0f5ea5)'}}>
                        <Navbar.Header >
                            <Navbar.Brand>
                                <Link to="/home/index" style={{height:'70px',lineHeight:'35px',color:'white',fontSize:'30px'}}>
                                    <img src="/imgs/logo.png" style={{width:'160px',height:'40px'}}/>
                                </Link>
                            </Navbar.Brand>
                            {/*<Navbar.Toggle />*/}
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav style={{height:'70px'}}>
                                <Navbar.Brand>
                                    <Link to="" style={{height:'70px',lineHeight:'35px',color:'white',fontSize:'20px'}}>首页</Link>
                                </Navbar.Brand>

                                <Navbar.Brand>
                                    <Link to="/pc/index" style={{height:'70px',lineHeight:'35px',color:'white',fontSize:'20px'}}>礼包商城</Link>
                                </Navbar.Brand>

                                <NavDropdown style={{marginTop:'8px'}}  eventKey={1} title="分类" id="my-basic-nav-dropdown">
                                    <MenuItem eventKey={1.1} style={{color:'white'}}>
                                        <Link to="/home/classify">
                                            优品牌
                                        </Link>
                                    </MenuItem>
                                    <MenuItem eventKey={1.2}>保健坊</MenuItem>
                                </NavDropdown>

                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">
                                    <FormControl
                                        type="text"
                                        value={this.state.value}
                                        placeholder="富硒康"
                                        onChange={this.handleChange.bind(this)}
                                        style={{width:'200px',position:'relative',paddingRight:'60px'}}
                                    />
                                    <Button style={{position:'absolute',top:'15px',right:'10px',height:'34px',backgroundColor:'#EEEEEE'}}>搜索</Button>

                                </NavItem>
                                <Button style={{marginTop:'15px'}}>我的购物车</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}
