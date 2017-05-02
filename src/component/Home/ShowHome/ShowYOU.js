/**
 * Created by hcy on 2017/4/12.
 */
import React from 'react'
import ProductionItem from "../Production/ProductionItem";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'
class ShowYOU extends React.Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        get('/main/getMainPageGoods', (res) => {
            actions.getMainPageGoods(res.data)
        })

    }

    render() {
        let {mainPageGoods} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        let outstanding_shop_goods = mainPageGoods.outstanding_shop_goods;
        let productions = new Array();
        let shopId = undefined;
        if (outstanding_shop_goods != null && outstanding_shop_goods != undefined && outstanding_shop_goods != []) {
            let outStandingItems = outstanding_shop_goods.slice(0,9);
            for (let i = 0; i < outStandingItems.length; i += 3) {
                let tmp = outStandingItems.slice(i, i + 3).map((ele, id) => {
                     shopId = ele.shopId;
                    return <Link to={'/information/'+ele.shopId+"/"+ele.id} key={id+i}>
                        <div className="pRow" key={id+i}><ProductionItem src={ele} key={id+i} actions={actions}/></div>
                    </Link>
                });
                productions[i / 3] = <div key={i/3} className="AllProductionBox">{tmp}</div>
            }
        }

        return (
            <div style={{backgroundColor:'white'}}>
                <div className="showBanner">
                    <img src="../imgs/m1.png"/>
                    {/*<Link to="/home/cate"><span>&nbsp;>more</span></Link>*/}
                </div>

                <div style={{width:"100%",height:'60px',backgroundColor:'white',display:'flex',justifyContent:'space-between',borderBottom:'1px solid grey',fontSize:'20px',lineHeight:'60px'}}>
                    &nbsp;&nbsp;&nbsp;
                    {/*<Link to={/shop/+shopId} style={{marginRight:'30px'}}> &gt;进入店铺&nbsp;&nbsp;&nbsp;*/}
                    {/*</Link>*/}
                </div>
                {productions}

            </div>
        )
    }
}
export default connect((state)=>state)(ShowYOU)