/**
 * Created by hcy on 2017/4/29.
 */
/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'

export default class PartItem extends React.Component{
    constructor(pros){
        super(pros)
    }
    render(){
        return(
            <span className="productionIcon2">
                 <div className="pBox2">
                    <img src={this.props.src.headImg}/>
                    <p className="pDetail2">{this.props.src.name}</p>
                 </div>
                 <div className="priceBox2">
                     <p className="fakePrice2">市场价<span className="fakePriceChild2">￥{this.props.src.originPrice}</span></p>
                     <p className="price2">唐僧价<span className="priceChild2">￥{this.props.src.newPrice}</span></p>
                 </div>
                 <div className="minPrice2"><span>最低实付￥{this.props.src.minPrice}</span></div>
             </span>
        )
    }

}