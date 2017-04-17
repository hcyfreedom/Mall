/**
 * Created by hcy on 2017/4/14.
 */
import React from 'react'
import CartItems from './CartItems'
import CartShopName from './CartShopName'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../http/http"
import * as mallActions from '../../action/mallActions'
class CarIndex extends React.Component{
    constructor(props){
        super(props)
    }


    componentWillMount (){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let {ordersInCart} = this.props.homeReducer;
        get('/good/getOrdersInCart',(res) => {
            actions.getOrdersInCart(res.data);
        })
    }
    render(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let {ordersInCart} = this.props.homeReducer;
        const result = {};
        function group(data,str) {

            for(let i = 0; i < data.length;i++){
                const key = data[i][str];
                if(!result[key]){
                    result[key] = {
                        shopId : key,
                        shopName : data[i].shopName,
                        lists : []
                    };
                }
                result[key].lists.push(data[i]);
            }
            return result;
        }

        group(ordersInCart,'shopId');

        const itemsWrap = [];
        for(let key in result){
                // console.log(result[key].shopName);
                //
                // console.log(result[key].lists)

            const items  = result[key].lists.map((ele,id) => {
                    return <CartItems key={id} ele={ele}/>
            })
            // return  (
            //     <div style={{position:'relative',top:'80px'}}>
            //         <div className="cartShopName"><div className="cartCircle"></div><img src="/imgs/1.jpg"/><p>{result[key].shopName}</p><div className="goTo">&gt;</div>
            //             <div className="cartEditor">编辑</div>
            //         </div>
            //         {items}
            //     </div>
            // )

            const  itemsW = <div key={key}>
                <div style={{position:'relative',top:'80px'}}>
                             <div className="cartShopName"><div className="cartCircle"></div><img src="/imgs/1.jpg"/><p>{result[key].shopName}</p><div className="goTo">&gt;</div>
                                 <div className="cartEditor">编辑</div>
                             </div>
                             {items}
                </div>
            </div>
             itemsWrap.push(itemsW);
        }
console.log(itemsWrap)

        return(
           <div>
               {itemsWrap}
           </div>
        )
    }
}

export default connect((state) => state)(CarIndex)