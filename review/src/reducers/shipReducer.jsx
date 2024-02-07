import {
    USER_SHIP_REQUEST,
    USER_SHIP_SUCCESS,
    USER_SHIP_FAIL,
  } from "../constants/shipConstants";
  
  export const userSHIPReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SHIP_REQUEST:
        return { loading: true };
      case USER_SHIP_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SHIP_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  