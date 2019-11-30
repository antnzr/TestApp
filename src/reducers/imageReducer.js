import {
    FETCH_IMAGE_BY_ID_SUCCESS,
    CLEAR_IMAGE
} from "../actions/actionTypes";

const initialState = {
    image: [],
    loading: true
};

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case FETCH_IMAGE_BY_ID_SUCCESS:
            return {
                image: payload,
                loading: false
            };
        case CLEAR_IMAGE:
            return initialState;
        default:
            return state;
    }
}