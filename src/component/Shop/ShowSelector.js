/**
 * Created by hcy on 2017/4/7.
 */
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
import ShopMain from './ShopMain'
import ShopHotSale from './ShopHotSale'
import ShowAllProduction from './ShopAllProduction'
import ShopActivity from './ShopActivity'
export default class ShowSelector extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideIndex : 0,
        };
    }

    handleChange(value){
        this.setState({
            slideIndex:value,
        });
    };

    render(){
        return(
            <MuiThemeProvider>
                <div style={{background:'linear-gradient(to left,#0f5ea5, #6dddf1)',height:'48px'}}>
                    <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex} tabItemContainerStyle={{backgroundColor:'transparent'}} >
                        <Tab label="店铺首页" value={0} style={{fontSize:'1.2em'}}/>
                        <Tab label="全部商品" value={1} style={{fontSize:'1.2em'}} />
                        <Tab label="热销产品" value={2} style={{fontSize:'1.2em'}} />
                        <Tab label="店铺活动" value={3} style={{fontSize:'1.2em'}} />
                    </Tabs>
                    <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
                        <div>
                            <ShopMain path={this.props.pathParams}/>
                        </div>
                        <div>
                            <ShowAllProduction path={this.props.pathParams}/>
                        </div>
                        <div>
                            <ShopHotSale path={this.props.pathParams}/>
                        </div>
                        <div>
                            <ShopActivity path={this.props.pathParams}/>
                        </div>
                    </SwipeableViews>
                </div>


            </MuiThemeProvider>

        )
    }

}