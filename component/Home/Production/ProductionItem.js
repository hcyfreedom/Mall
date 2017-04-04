/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'

export default class ProductionItem extends React.Component{
    constructor(pros){
        super(pros)
        this.state = {
            src : this.props.src.src,
            detail: this.props.src.detail,
            fakePrice : this.props.src.fakePrice,
            price:this.props.src.price,
            minPrice:this.props.src.minPrice

        }
    }
     render(){
         return(
             <span className="productionIcon">
                 <div className="pBox">
                    <img src={this.state.src}/>
                    <p className="pDetail">{this.state.detail}</p>
                 </div>
                 <div className="priceBox">
                     <p className="fakePrice">市场价<span className="fakePriceChild">￥{this.state.fakePrice}</span></p>
                     <p className="price">唐僧价<span className="priceChild">￥{this.state.price}</span></p>
                 </div>
                 <div className="minPrice"><span>最低实付￥{this.state.minPrice}</span></div>
             </span>
         )
     }

}