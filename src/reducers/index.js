import {combineReducers} from "redux";

import imagesReducer from "../reducers/imagesReducer";

const rootReducer = combineReducers({
    imagesList: imagesReducer,
});

export default rootReducer;