import {
    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE,
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE
} from "../Comment/ActionType";

const initialState = {
    comments: [],
    loading: false,
    error: null,
    messages: []    // New state for messages
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
        case CREATE_COMMENT_REQUEST:
        case DELETE_COMMENT_REQUEST:
        case SEND_MESSAGE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.comments,
                error: null
            };

        case CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: [...state.comments, action.comment],
                error: null
            };

        case DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: state.comments.filter(comment => comment.id !== action.commentId),
                error: null
            };

        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [...state.messages, action.message],  // Update state with the new message
                error: null
            };

        case FETCH_COMMENTS_FAILURE:
        case CREATE_COMMENT_FAILURE:
        case DELETE_COMMENT_FAILURE:
        case SEND_MESSAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
};

export default commentReducer;
