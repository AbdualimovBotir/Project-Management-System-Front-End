import api from "@/config/api";
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
} from "./ActionTypes";

// Fetch comments for a specific post or entity
export const fetchComments = (postId) => async (dispatch) => {
    dispatch({ type: FETCH_COMMENTS_REQUEST });
    try {
        const { data } = await api.get(`/api/comments?postId=${postId}`);
        dispatch({ type: FETCH_COMMENTS_SUCCESS, comments: data });
    } catch (error) {
        console.error("Fetch comments error:", error.response?.data || error.message);
        dispatch({ type: FETCH_COMMENTS_FAILURE, error: error.response?.data || error.message });
    }
};

// Create a new comment
export const createComment = (commentData) => async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });
    try {
        const { data } = await api.post("/api/comments", commentData);
        dispatch({ type: CREATE_COMMENT_SUCCESS, comment: data });
    } catch (error) {
        console.error("Create comment error:", error.response?.data || error.message);
        dispatch({ type: CREATE_COMMENT_FAILURE, error: error.response?.data || error.message });
    }
};

// Delete a comment by ID
export const deleteComment = (commentId) => async (dispatch) => {
    dispatch({ type: DELETE_COMMENT_REQUEST });
    try {
        await api.delete(`/api/comments/${commentId}`);
        dispatch({ type: DELETE_COMMENT_SUCCESS, commentId });
    } catch (error) {
        console.error("Delete comment error:", error.response?.data || error.message);
        dispatch({ type: DELETE_COMMENT_FAILURE, error: error.response?.data || error.message });
    }
};

// Send a new message
export const sendMessage = (messageData) => async (dispatch) => {
    dispatch({ type: SEND_MESSAGE_REQUEST });
    try {
        const { data } = await api.post("/api/messages", messageData);
        dispatch({ type: SEND_MESSAGE_SUCCESS, message: data });
    } catch (error) {
        console.error("Send message error:", error.response?.data || error.message);
        dispatch({ type: SEND_MESSAGE_FAILURE, error: error.response?.data || error.message });
    }
};
