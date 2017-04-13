/**
 * Created by hcy on 2017/4/6.
 */
export function getBottomNav(data,idx) {
    return {
        type: "BOTTOM_NAV",
        payload: data,
        index: idx
    }
}
export function getBrand(data,idx) {
    return{
        type:"BRAND",
        payload:data,
        index:idx
    }
}

export function getProduction(data,idx) {
    return{
        type:"PRODUCTION",
        payload:data,
        index:idx
    }
}



export function getIntroDetail(data) {
    return{
        type:'TNTRO_DETAIL',
        payload:data
    }
}

export function getHistory(data,idx) {
    return{
        type:'HISTORY_ITEM',
        payload:data,
        index:idx
    }
}

export function getGood(data) {
    return{
        type:'GOOD_ITEM',
        payload:data,
    }
}

export function getClassifyBar(data,idx) {
    return{
        type:"CLASSIFY_BAR",
        payload:data,
        index:idx
    }
}

export function getClassify(data) {
    return{
        type:"CLASSIFY",
        payload:data,
    }
}

export function getClassifyGood(data) {
    return{
        type:"CLASSIFY_GOOD",
        payload:data
    }
}
export function getShopItemsAll(data) {
    return{
        type:"SHOP_ITEMS_ALL",
        payload:data
    }
}
export function getShopMainPage(data) {
    return{
        type:"SHOP_MAIN_PAGE",
        payload:data
    }
}

export function getHotSale(data) {
    return{
        type:'HOT_SALE',
        payload:data
    }
}
export function getActivityImgUrl(data) {
    return{
        type:'ACTIVITY_IMG_URL',
        payload:data
    }
}

export function getTelephone(data) {
    return{
        type:"TELEPHONE",
        payload:data
    }
}