import api from "@/config/api";
import {
  GET_USER_SUBSCRIPTION_REQUEST,
  GET_USER_SUBSCRIPTION_SUCCESS,
  GET_USER_SUBSCRIPTION_FAILURE,
  UPGRADE_SUBSCRIPTION_REQUEST,
  UPGRADE_SUBSCRIPTION_SUCCESS,
  UPGRADE_SUBSCRIPTION_FAILURE,
} from "./ActionTypes";

// Get User Subscription Action
export const getUserSubscription = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_SUBSCRIPTION_REQUEST });
    try {
      const response = await api.get('/api/subscription/user', {
        headers: {
          "Authorization": `Bearer ${jwt}` // Correct header: "Authorization"
        }
      });
      dispatch({ type: GET_USER_SUBSCRIPTION_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_USER_SUBSCRIPTION_FAILURE, payload: error.message });
    }
  };
};

// Upgrade Subscription Action
export const upgradeSubscription = (planType) => {
  return async (dispatch) => {
    dispatch({ type: UPGRADE_SUBSCRIPTION_REQUEST });
    try {
      const response = await api.post('/api/subscription/upgrade', null, {
        params: {
          planType:planType,
        }
      });
      dispatch({ type: UPGRADE_SUBSCRIPTION_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPGRADE_SUBSCRIPTION_FAILURE, payload: error.message });
    }
  };
};
