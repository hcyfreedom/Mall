/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'

export default class ProductionItem extends React.Component{
    constructor(pros){
        super(pros)
    }

    componentWillMount() {
        this.props.actions.getProduction(this.props.src.src,this.props.src.detail,this.props.src.fakePrice,this.props.src.minPrice,this.props.src.price,this.props.index)
    }

     render(){
         return(
             <span className="productionIcon">
                 <div className="pBox">
                    <img src={this.props.src.src}/>
                    <p className="pDetail">{this.props.src.detail}</p>
                 </div>
                 <div className="priceBox">
                     <p className="fakePrice">市场价<span className="fakePriceChild">￥{this.props.src.fakePrice}</span></p>
                     <p className="price">唐僧价<span className="priceChild">￥{this.props.src.price}</span></p>
                 </div>
                 <div className="minPrice"><span>最低实付￥{this.props.src.minPrice}</span></div>
             </span>
         )
     }

}