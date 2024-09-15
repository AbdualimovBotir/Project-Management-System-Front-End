import {
  GET_USER_SUBSCRIPTION_REQUEST,
  GET_USER_SUBSCRIPTION_SUCCESS,
  GET_USER_SUBSCRIPTION_FAILURE,
  UPGRADE_SUBSCRIPTION_REQUEST,
  UPGRADE_SUBSCRIPTION_SUCCESS,
  UPGRADE_SUBSCRIPTION_FAILURE,
} from "../Subscription/ActionType";

const initialState = {
  userSubscription: null, 
  loading: false, // Yuklanish holati
  error: null, // Xatoliklar
};

// user reducer
const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUBSCRIPTION_REQUEST:
    case UPGRADE_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case GET_USER_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        userSubscription: action.payload, 
        error: null
      };

    case UPGRADE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        userSubscription: action.payload, // Yangilangan subscription ma'lumotlari
        error: null
      };

    case GET_USER_SUBSCRIPTION_FAILURE:
    case UPGRADE_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload // Xato haqida ma'lumot
      };

    default:
      return state;
  }
};

export default subscriptionReducer;
