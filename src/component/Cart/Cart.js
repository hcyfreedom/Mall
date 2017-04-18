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

        const result = {};//分组后的对象。
        function group(data,str) {

            for(let i = 0; i < data.length;i++){
                const key = data[i][str];//key为获取到的shopId，分组的关键

                //如果之前没有这个shopId的条目出现，就新建一个以key为键名的对象，每次走进这个if，
                //就相当于创建了一个新的桶
                if(!result[key]){
                    result[key] = {
                        shopId : key,
                        shopName : data[i].shopName,
                        lists : []
                    };
                }

                //将这个条目添加到这个以key为键名的对象lists里面
                result[key].lists.push(data[i]);
            }
            return result;
        }

        group(ordersInCart,'shopId');

        const itemsWrap = [];
        for(let key in result){

            const items  = result[key].lists.map((ele,id) => {
                    return <CartItems key={id} ele={ele}/>
            })

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