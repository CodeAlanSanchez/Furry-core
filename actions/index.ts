import { FETCH_DOGS, FETCH_CATS, CHOOSE_OPTION } from "./types";
import type { Dispatch } from 'redux'
import * as api from "../api";

export const getDogs = () => async (dispatch: Dispatch<any>) => {
    try {
        const { data } = await api.fetchDogs();
        
        dispatch({type: FETCH_DOGS, payload: data })
    } catch (error) {
        console.error(error);
    }
}

export const getCats = () => async (dispatch: Dispatch<any>) => {
    try {
        const { data } = await api.fetchCats();
        
        dispatch({type: FETCH_DOGS, payload: data })
    } catch (error) {
        console.error(error);
    }
}