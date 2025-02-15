import { 
    GET_USER_REQUEST, 
    GET_USER_SUCCESS, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS,
    LOGOUT,
    AUTH_ERROR  
} from "./ActionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null,
    projectSize: 0,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, loading: true, error: null };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, loading: false, error: null, jwt: action.payload.jwt };
        case GET_USER_SUCCESS:
            return { ...state, loading: false, error: null, user: action.payload };
        case LOGOUT:
            return initialState;
        case AUTH_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default authReducer; // Ensure you use default export
