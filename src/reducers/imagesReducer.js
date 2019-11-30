import {FETCH_IMAGES_SUCCESS,} from "../actions/actionTypes";

const initialState = {
    images: [],
    loading: true
};

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case FETCH_IMAGES_SUCCESS:
            return {
                images: payload,
                loading: false
            };
        default:
            return state;
    }
}