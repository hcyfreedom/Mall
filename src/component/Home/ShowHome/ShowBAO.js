/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import ProductionItem from "../Production/ProductionItem";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'
class ShowBAO extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        get('/main/getMainPageGoods', (res) => {
            actions.getMainPageGoods(res.data)
        })
        get('/main/getClassify', (res) => {
            actions.getClassify(res.data)
        })


    }

    render() {
        let {classify, mainPageGoods} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        let finalComponent = new Array();
        let MyHead = React.createClass({
            render(){
                return (
                    <div className="showBanner">
                        <span className="classifyName">{this.props.classifyName}</span>
                        <Link to={"/home/classify/"+this.props.classifyId} className="moreName">&nbsp;>more</Link>
                    </div>)

            }
        });
        for (let i = 0; i < classify.length; i++) {
            let classifyId = classify[i].id;
           let  classifyName = classify[i].classifyName;

            let goodsArray = mainPageGoods[classifyId];
            let productions = new Array();
            if (goodsArray == null || goodsArray == undefined || goodsArray == []) {
                finalComponent[i] = <div key={i}></div>;
                continue;
            }
            for (let i = 0; i < goodsArray.length; i += 3) {
                let tmp = goodsArray.slice(i, i + 3).map((ele, id) => {
                    return <Link to={'/information/'+ele.shopId+"/"+ele.id} key={id+i}>
                        <div className="pRow" key={id+i}><ProductionItem src={ele} key={id+i} actions={actions}/></div>
                    </Link>
                });
                productions[i / 3] = <div key={i/3} className="AllProductionBox">{tmp}</div>
            }
            finalComponent[i] =
                <div key={i}>
                    <MyHead key={i} classifyId={classifyId} classifyName={classifyName} />
                    {productions}

                </div>
        }

        return (
            <div>
                {finalComponent}
            </div>
        )
    }
}
export default connect((state) => state)(ShowBAO)