import axios from 'axios';
import {
    USER_SHIP_REQUEST,
    USER_SHIP_SUCCESS,
    USER_SHIP_FAIL,
} from "../constants/shipConstants";

// Action creator to request shipping
export const shipUser = (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_SHIP_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const shippingUrl = 'http://127.0.0.1:8000/api/shipping/'; 

        const { data } = await axios.post(shippingUrl, userData, config);

        dispatch({
            type: USER_SHIP_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_SHIP_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        });
    }
};
