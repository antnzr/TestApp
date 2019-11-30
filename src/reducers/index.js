import {combineReducers} from "redux";

import imagesReducer from "../reducers/imagesReducer";
import imageReducer from "../reducers/imageReducer";

const rootReducer = combineReducers({
    imagesList: imagesReducer,
    imageData: imageReducer
});

export default rootReducer;