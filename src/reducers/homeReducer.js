const initState = {
    allProduction:[],
    classifyFirst:[],
    classifySecond:[],
    classifyThird:[],
    outstanding_shop_goods:[],
    outstanding_shop_info:[],
    classify:[],
    classifyGOODS:[],
    allShopItems:[],
    bottomNavItemUrl : [],
    hotSale:[],
    shopHeadImgUrl:[],
    shopMainGoods:[],
    shopMainImgUrl:[],
    activityImgUrl:[],
    shopTel:[],
    open:false,
    introDetail:[],
    introPrice:[],
    introTsprice:[],
    introSales:[],
    introLow:[],
    items : [
        {
            src:'/imgs/b1.png',
            hoverSrc:'/imgs/b11.png',
            href: '/home/index',
        },
        {
            src:'/imgs/b2.png',
            hoverSrc:'/imgs/b22.png',
            href: '/home/cate',
        },{
            src:'/imgs/b3.png',
            hoverSrc:'/imgs/b33.png',
            href: '/kings',
        },{
            src:'/imgs/b4.png',
            hoverSrc:'/imgs/b44.png',
            href: '/',
        },{
            src:'/imgs/b5.png',
            hoverSrc:'/imgs/b55.png',
            href: '/queens',
        }
    ],
    classifyItem : [
        {
            src:'../imgs/c1.png',
            detail:"优品牌"
        },{
            src:'../imgs/c2.png',
            detail:'保健坊'
        },{
            src:'../imgs/c3.png',
            detail:'美容产品'
        },{
            src:'../imgs/c4.png',
            detail:'百货'
        },{
            src:'../imgs/c5.png',
            detail:'全部'
        }

    ],
     brandItem :[
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

    ],

    showyouItem : [
        {
            src:'../imgs/p1.png',
            shopHref:'/shop/index'
        },{
            src:'../imgs/p1.png',
            shopHref:'/shop/index'
        },{
            src:'../imgs/p1.png',
            shopHref:'/shop/index'
        }

    ],
    historyItem:[
            {
                history:"《JavaScript高级程序设计》",
                href:"/information/intro"
            },
            {
                history:"裙子",
                href:"/information/intro"
            },{
                history:"裤子",
                href:"/information/intro"
            }
    ]
}

export default function homeReducer(state = initState, action = {}) {
    const {type, payload} = action;
    let clone = Object.assign({}, state);
    switch (type) {
        case  "BOTTOM_NAV" :
            clone.bottomNavItemUrl[action.index] = payload;
            return clone;

        case "BRAND":
            clone.brandItem.src= payload;
            clone.brandItem.detail = payload;
            return clone;


        case "TNTRO_DETAIL":
            clone.introDetail = payload.detail;
            clone.introPrice = payload.price;
            clone.introTsprice = payload.tsprice;
            clone.introSales = payload.sales;
            clone.introLow = payload.low;
            return clone;

        case "HISTORY_ITEM":
            clone.historyItem.history = payload;
            clone.historyItem.href = payload;
            return clone;

        case "GOOD_ITEM":
            clone.allProduction = payload.msg;
            clone.classifyFirst = payload.msg['1'];
            clone.classifySecond = payload.msg['2'];
            clone.classifyThird = payload.msg['3'];
            clone.outstanding_shop_goods = payload.msg['outstanding_shop_goods'];
            clone.outstanding_shop_info = payload.msg['outstanding_shop_info'];
            return clone;

        case "CLASSIFY_BAR":
            clone.classifyItem.src= payload;
            clone.classifyItem.detail = payload;
            return clone;

        case "CLASSIFY" :
            clone.classify = payload.msg;
            return clone;

        case "CLASSIFY_GOOD":
            clone.classifyGOODS = payload.msg;
            return clone;

        case "SHOP_ITEMS_ALL":
            clone.allShopItems = payload.msg;
            return clone;

        case "HOT_SALE":
            clone.hotSale = payload.msg;
            return clone;

        case "SHOP_MAIN_PAGE":
            clone.shopHeadImgUrl = payload.msg['headImgUrl'];
            clone.shopMainGoods = payload.msg['goods'];
            clone.shopMainImgUrl = payload.msg['mainImgUrl'];
            return clone;

        case "ACTIVITY_IMG_URL":
            clone.activityImgUrl = payload.msg;
            return clone;

        case "TELEPHONE" :
            clone.shopTel = payload.msg;
            return clone;
    }
    return clone;

}