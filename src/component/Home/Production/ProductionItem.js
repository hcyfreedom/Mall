/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'

export default class ProductionItem extends React.Component{
    constructor(pros){
        super(pros)
    }
     render(){
         return(
             <span className="productionIcon">
                 <div className="pBox">
                    <img src={this.props.src.headImg}/>
                    <p className="pDetail">{this.props.src.name}</p>
                 </div>
                 <div className="priceBox">
                     <p className="fakePrice">市场价<span className="fakePriceChild">￥{this.props.src.originPrice}</span></p>
                     <p className="price">唐僧价<span className="priceChild">￥{this.props.src.newPrice}</span></p>
                 </div>
                 <div className="minPrice"><span>最低实付￥{this.props.src.minPrice}</span></div>
             </span>
         )
     }

}