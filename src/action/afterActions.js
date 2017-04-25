/**
 * Created by hcy on 2017/4/25.
 */
export function getGiftsIndex(data) {
    return{
        type:'GET_GIFTS_INDEX',
        payload:data
    }
}

export function getGiftsDetail(data) {
    return{
        type:"GET_GIFTS_DETAIL",
        payload:data
    }
}