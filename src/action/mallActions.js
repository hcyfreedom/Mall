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
export function getClassify(data,idx) {
    return{
        type:"CLASSIFY",
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

export function getShow(data,idx) {
    return{
        type:"SHOWYOU",
        payload:data,
        index:idx
    }
}

export function getGoodBrand(data,idx) {

}