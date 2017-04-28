/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'


class Selector extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        get('/main/getClassify',(res) => {
            actions.getClassify(res.data)
        })
    }


    render(){

        let {classify} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);

         const selectorItems = classify.map((ele,id) =>{
             const isCurrent = location.pathname.split('/').pop() == ele.id;
             return <Link to={"/home/classify/"+ele.id} key={id}>
                <div>
                    {isCurrent
                    ?
                    <div
                        style={{
                            background: "linear-gradient(#0f5ea5, #6dddf1)",
                            width: "5px",
                            height: "80px",
                            position: "absolute",
                            zIndex: "200",
                        }}>

                    </div>
                    :
                    null
                    }
                    <MenuItem
                        style={{
                            // fontFamily: "Microsoft Yahei",
                            fontWeight: "600",
                            fontSize:"1.5vh",
                            minHeight:'80px',
                            height: "4vh",
                            lineHeight:'80px',
                            paddingLeft:'3vw',
                            width: "22vw",
                            borderBottom: "solid 0.5px lightgray",
                            color: isCurrent ? '#0f5ca8' : 'black',
                            backgroundColor: isCurrent ? '#f2f2f2' : '',
                        }}
                        primaryText={ele.classifyName}
                        key={id}
                    />
                </div>
                    </Link>
        });

        return(
            <MuiThemeProvider >
                <Paper style={style} >
                    <Menu >
                        {selectorItems}
                    </Menu>
                </Paper>
            </MuiThemeProvider>
        )
    }
}

export default connect((state) => state)(Selector);

const style = {
    // display: 'inline-block',
    margin: '116px 0 0 0',
    width:'22vw',
    fontSize:'25px'
};