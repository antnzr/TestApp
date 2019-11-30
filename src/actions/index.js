import {
    FETCH_IMAGES_FAILURE,
    FETCH_IMAGES_START,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGE_BY_ID_START,
    FETCH_IMAGE_BY_ID_SUCCESS,
    FETCH_IMAGE_BY_ID_FAILURE,
    CLEAR_IMAGE
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

export const fetchImageById = id => async dispatch => {
    dispatch({
        type: FETCH_IMAGE_BY_ID_START
    });

    try {
        const image = await imageService.fetchImageById(id);

        dispatch({
            type: FETCH_IMAGE_BY_ID_SUCCESS,
            payload: image
        })
    } catch (error) {
        dispatch({
            type: FETCH_IMAGE_BY_ID_FAILURE,
            payload: error,
            error: true
        })
    }
};

export const clearImage = () => dispatch => {
    dispatch({
        type: CLEAR_IMAGE,
        payload: null
    })
};