/**
 * Created by hcy on 2017/4/10.
 */
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class SearchOut extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange (value) {
        this.setState({
            slideIndex: value,
        });
    };
    render(){
        return(
            <MuiThemeProvider>
               <div style={{position:'relative',top:'80px'}}>
                   <Tabs
                       onChange={this.handleChange.bind(this)}
                       value={this.state.slideIndex}
                   >
                       {/*<Tab label="Tab One" value={0} style={{backgroundColor:'#E5E5E5'}}/>*/}
                       {/*<Tab label="Tab Two" value={1} style={{backgroundColor:'#E5E5E5'}}/>*/}
                       {/*<Tab label="Tab Three" value={2} style={{backgroundColor:'#E5E5E5'}}/>*/}
                       <Tab label="全部" value={0}/>
                       <Tab label="优品牌" value={1}/>
                       <Tab label="保健坊" value={2}/>
                       <Tab label="美容产品" value={3}/>
                       <Tab label="百货" value={4}/>
                   </Tabs>
                   <SwipeableViews
                       index={this.state.slideIndex}
                       onChangeIndex={this.handleChange.bind(this)}
                   >
                       <div>
                           <h2 style={styles.headline}>Tabs with slide effect</h2>
                           Swipe to see the next slide.<br />
                       </div>
                       <div style={styles.slide}>
                           slide n°2
                       </div>
                       <div style={styles.slide}>
                           slide n°3
                       </div>
                   </SwipeableViews>
               </div>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};