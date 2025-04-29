import { ADD_PRODUCT, SET_DETAIL_PRODUCT, SET_PRODUCTS } from "./constants";

const initState = {
    detail: {},
    list: [],
};

function reducer(state = initState, action) {
    console.log(action);
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                list: [...state.list, action.payload],
            };
        case SET_PRODUCTS:
            return {
                ...state,
                list: action.payload,
            };
        case SET_DETAIL_PRODUCT:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    [action.payload.slug]: action.payload,
                },
            };
        default:
            return state;
    }
}

export default reducer;
