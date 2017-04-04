/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';


const Selector = () => (
    <MuiThemeProvider>
        <Paper style={style}>
            <Menu>
                <Link key="../CatePart/GoodBrand" to={GoodPart}><MenuItem primaryText="优品牌" /></Link>
                <Link key="../CatePart/HealthCare" to={HealthCare}><MenuItem primaryText="保健类" /></Link>
                <MenuItem primaryText="美容产品" />
                <MenuItem primaryText="百货" />
            </Menu>
        </Paper>

    </MuiThemeProvider>
);

export default Selector;

const style = {
    display: 'inline-block',
    margin: '76px 32px 16px 0',
};