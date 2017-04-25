/**
 * Created by hcy on 2017/4/19.
 */
const initState = {
    allAddress:[],
    giftsEle:[],
    giftsDetail:[],
}

export default function afterReducer(state = initState, action = {}) {
    const {type, payload} = action;
    let clone = Object.assign({}, state);
    switch (type) {
        case "GET_ADDRESS":
            clone.allAddress = payload.msg;
            return clone;

        case "GET_GIFTS_INDEX":
            clone.giftsEle = payload.msg;
            return clone;

        case "GET_GIFTS_DETAIL":
            clone.giftsDetail = payload.msg;
            return clone;
    }
    return clone;

}