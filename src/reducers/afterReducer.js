/**
 * Created by hcy on 2017/4/19.
 */
const initState = {
    allAddress:[],
}

export default function afterReducer(state = initState, action = {}) {
    const {type, payload} = action;
    let clone = Object.assign({}, state);
    switch (type) {
        case "GET_ADDRESS":

            clone.allAddress = payload.msg;
            return clone;

    }
    return clone;

}