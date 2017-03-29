/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
import BrandItem from './BrandItem'
export default class Brand extends React.Component{
    constructor(){
        super()
        let brandItem = [
            {
                src:'../imgs/icon1.png',
                detail:"众品联动"
            },{
                src:'../imgs/icon2.png',
                detail:'品牌直供'
            },{
                src:'../imgs/icon3.png',
                detail:'地道品质'
            }

        ]
        this.state = {
            brand : brandItem
        }
    }

    render(){
        const brandItems = this.state.brand.map((ele,idx) =>{
            return <BrandItem key={idx} src={ele} />
        })

        return(
            <div className="brandBox">
                    {brandItems}
            </div>
        )
    }
}