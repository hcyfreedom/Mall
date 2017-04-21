const initState = {
    mainPageGoods:[],
    allProduction:[],
    classifyFirst:[],
    classifySecond:[],
    classifyThird:[],
    outstanding_shop_goods:[],
    outstanding_shop_info:[],
    classify:[],
    classifyGOODS:[],
    classifyGOODSId:[],
    allShopItems:[],
    bottomNavItemUrl : [],
    hotSale:[],
    hotSaleShopId:[],
    shopHeadImgUrl:[],
    shopMainGoods:[],
    shopMainImgUrl:[],
    shopMainShopId:[],
    activityImgUrl:[],
    activityShopId:[],
    shopTel:[],
    open:false,
    slideIndex:0,
    introGood:[],
    introCode:[],
    introGoodId:[],
    introDetail:[],
    introPrice:[],
    introTsprice:[],
    introSales:[],
    introLow:[],
    contentImg:[],
    introContent:[],
    introShopId:[],
    introShopTel:[],
    addToCartCount:[],
    ordersInCart:[],
    orderId:[],
    orderCount:[],
    goodCountInCart:[],
    cartCircleIcon:{backgroundColor:"transparent"},
    cartDelete:{display:'none'},
    editorFlag:"编辑",
    totalPrice:"0.00",
    badge:{
        position:'absolute',
        bottom:'20px',
        right:'50px',
        display:'none'
    },
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
            href: '/home/cart',
        },{
            src:'/imgs/b4.png',
            hoverSrc:'/imgs/b44.png',
            href: '/',
        },{
            src:'/imgs/b5.png',
            hoverSrc:'/imgs/b55.png',
            href: '/wallet',
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
    ],
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

        case "HISTORY_ITEM":
            clone.historyItem.history = payload;
            clone.historyItem.href = payload;
            return clone;

        case "GOOD_ITEM":
            clone.allProduction = payload.msg;

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
            clone.classifyGOODSId = payload.msg['classifyId'];
            return clone;

        case "SHOP_ITEMS_ALL":
            clone.allShopItems = payload.msg;
            return clone;

        case "HOT_SALE":
            clone.hotSale = payload.msg;
            clone.hotSaleShopId = payload.msg['shopId'];
            return clone;

        case "SHOP_MAIN_PAGE":
            clone.shopHeadImgUrl = payload.msg['headImgUrl'];
            clone.shopMainGoods = payload.msg['goods'];
            clone.shopMainImgUrl = payload.msg['mainImgUrl'];
            clone.shopMainShopId = payload.msg['shopId'];
            return clone;

        case "ACTIVITY_IMG_URL":
            clone.activityImgUrl = payload.msg;
            clone.activityShopId = payload.msg['shopId'];
            return clone;

        case "TELEPHONE" :
            clone.shopTel = payload.msg;
            return clone;

        case "CHANGE_OPEN_TRUE":
            clone.open = true;
            return clone;

        case "CHANGE_OPEN_FALSE":
            clone.open = false;
            return clone;

        case "GOOD_CONTENT":
            clone.introCode = payload;
            clone.introGood = payload.msg;
            clone.introGoodId = payload.msg['id'];
            clone.introDetail = payload.msg['name'];
            clone.introPrice = payload.msg['originPrice'];
            clone.introTsprice = payload.msg['newPrice'];
            clone.introSales = payload.msg['salesVolume'];
            clone.introLow = payload.msg['minPrice'];
            clone.contentImg = payload.msg['contentImg'];
            clone.introContent = payload.msg['content'];
            clone.introShopId = payload.msg['shopId'];
            clone.introShopTel = payload.msg['telephone'];
            return clone;

        case "SLIDE_INDEX":
            clone.slideIndex = payload;
            return  clone;

        case "MAIN_PAGE_GOODS":
            clone.mainPageGoods = payload.msg;
            clone.classifyFirst = payload.msg['1'];
            clone.classifySecond = payload.msg['2'];
            clone.classifyThird = payload.msg['3'];
            clone.outstanding_shop_goods = payload.msg['outstanding_shop_goods'];
            clone.outstanding_shop_info = payload.msg['outstanding_shop_info'];
            return clone;


        case  "ADD_TO_CART" :
            clone.addToCartCount = payload.msg['count'];
            clone.badge = {
                position:'absolute',
                bottom:'20px',
                right:'50px',
                display:'block'
            };
            return clone;

        case "ORDERS_IN_CART":
            clone.ordersInCart = payload.msg;
            return clone;

        case "CHANGE_ORDER_COUNT":
            let index = payload.index;
            let count = payload.count;
            let tmp = undefined;
            for(let i = 0;i<clone.ordersInCart.length;i++){
                if(clone.ordersInCart[i].goodId == index){
                    tmp = clone.ordersInCart[i];
                    break;
                }

            }
            tmp.goodCount = count;
            return clone;

        case "DELETE_AFTER":
            let deleteIndex = payload.index;
            let pointer = undefined;
             pointer = clone.ordersInCart.filter(function (item) {
                     return   item.goodId != deleteIndex

                })

            clone.ordersInCart = pointer;
            return clone;

        case "WILL_DELETE":
            clone.cartCircleIcon = {
                backgroundColor:"#ee4037"
            };
            clone.cartDelete = {
                display:"block"
            };
            clone.editorFlag = "完成";

            return clone;

        case "WILL_COMPLETE":
            clone.cartCircleIcon = {
                backgroundColor:"transparent"
            };
            clone.cartDelete = {
                display:"none"
            };
            clone.editorFlag = "编辑";

            return clone;

        case "TOTAL_PRICE":
            clone.cartCircleIcon = {
                backgroundColor:"#ee4037"
            };
            return clone;
    }
    return clone;

}