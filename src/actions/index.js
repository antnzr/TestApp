import {
    FETCH_IMAGES_FAILURE,
    FETCH_IMAGES_START,
    FETCH_IMAGES_SUCCESS
} from "./actionTypes";

import ImagesService from "../services/ImagesService";

const imageService = new ImagesService();

export const fetchImages = () => async dispatch => {
    dispatch({
        type: FETCH_IMAGES_START
    });

    try {
        const images = await imageService.fetchImages();

        dispatch({
            type: FETCH_IMAGES_SUCCESS,
            payload: images
        })
    } catch (error) {
        dispatch({
            type: FETCH_IMAGES_FAILURE,
            payload: error,
            error: true
        })
    }
};