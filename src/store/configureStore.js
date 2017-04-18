import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

let finalCreateStore;
let finalApplyMiddleware;


finalApplyMiddleware = applyMiddleware(thunk);

finalCreateStore = finalApplyMiddleware(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(reducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');//import的其实是 reducer问价下的index.js
            store.replaceReducer(nextReducer);//把旧的reducer传进来，然后生成新的state树 replaceReducer
        });
    }

    return store;
}
//用了一些中间件
//store是reducer和组件沟通的桥梁，提供了访问reducer的途径，调动homeReducer
//homeReducer里面，return了clone。
//action是bindActionCreators绑定到dispatch上的，store的通过Provider绑定到组件上，相当于父组件把state传给子组件
//dispatch也是provider提供的
//actions和reducer的对应是因为，action是bindActionCreators绑定到dispatch上的，dispatch也是provider提供的
//调用actions的时候，其实是在这里store.replaceReducer(nextReducer);