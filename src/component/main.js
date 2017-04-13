/**
 * Created by Acer on 2017/3/22.
 */
import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';
import BaseOptions from './BaseOptions'
import ShopPage from './ShopPage'
import Information from './Information'
import SearchIndex from "./Search/SearchIndex"
import Books from './Car/Books'
import { BrowserRouter as Router, Route, Redirect,Link  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



let store = configureStore();
const history = createHistory();

class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
            return(
                <Provider store={store}>
                    <Router history={history}>
                        <div>
                            <Route path="/home/:id" component={BaseOptions}/>
                            {/*<Redirect from="/" to="/home/index"/>*/}
                            <Route  path="/shop/:id" component={ShopPage}/>
                            <Route path="/information/:id" component={Information}/>
                            <Route path="/search/:id" component={SearchIndex}/>
                            <Route path="/car/index" component={Books}/>
                        </div>
                    </Router>
                </Provider>
            )

    }
}

ReactDOM.render(<Main/>,document.getElementById("app"));

