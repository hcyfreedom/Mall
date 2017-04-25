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
    componentWillMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        get('/main/getClassify',(res) => {
            actions.getClassify(res.data)
        })

    }


    render(){

        let {classify} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);

         const selectorItems = classify.map((ele,id) =>{
             return <Link to={"/home/classify/"+ele.id} key={id}><MenuItem primaryText={ele.classifyName} key={id} /></Link>
        });

        return(
            <MuiThemeProvider>
                <Paper style={style}>
                    <Menu listStyle={{}}>
                        {selectorItems}
                    </Menu>
                </Paper>
            </MuiThemeProvider>
        )
    }
}

export default connect((state) => state)(Selector);

const style = {
    display: 'inline-block',
    margin: '76px 0 16px 0',
    width:'150px'
};