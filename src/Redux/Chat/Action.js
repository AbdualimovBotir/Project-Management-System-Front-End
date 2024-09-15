import api from "@/config/api";

import {
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE,
    FETCH_CHAT_BY_PROJECT_REQUEST,
    FETCH_CHAT_BY_PROJECT_SUCCESS,
    FETCH_CHAT_BY_PROJECT_FAILURE,
    FETCH_CHAT_MESSAGES_REQUEST,
    FETCH_CHAT_MESSAGES_SUCCESS,
    FETCH_CHAT_MESSAGES_FAILURE
} from "./ActionTypes";

export const fetchMessages = (chatId) => async (dispatch) => {
    dispatch({ type: FETCH_MESSAGES_REQUEST });
    try {
        const { data } = await api.get(`/api/chats/${chatId}/messages`);
        dispatch({ type: FETCH_MESSAGES_SUCCESS, messages: data });
    } catch (error) {
        console.error("Fetch messages error:", error.response?.data || error.message);
        dispatch({ type: FETCH_MESSAGES_FAILURE, error: error.response?.data || error.message });
    }
};

export const sendMessage = (chatId, messageData) => async (dispatch) => {
    dispatch({ type: SEND_MESSAGE_REQUEST });
    try {
        const { data } = await api.post(`/api/chats/${chatId}/messages`, messageData);
        dispatch({ type: SEND_MESSAGE_SUCCESS, message: data });
    } catch (error) {
        console.error("Send message error:", error.response?.data || error.message);
        dispatch({ type: SEND_MESSAGE_FAILURE, error: error.response?.data || error.message });
    }
};

export const fetchChatByProject = (projectId) => async (dispatch) => {
    dispatch({ type: FETCH_CHAT_BY_PROJECT_REQUEST });
    try {
        const { data } = await api.get(`/api/projects/${projectId}/chat`);
        dispatch({ type: FETCH_CHAT_BY_PROJECT_SUCCESS, chat: data });
    } catch (error) {
        console.error("Fetch chat by project error:", error.response?.data || error.message);
        dispatch({ type: FETCH_CHAT_BY_PROJECT_FAILURE, error: error.response?.data || error.message });
    }
};

export const fetchChatMessages = (chatId) => async (dispatch) => {
    dispatch({ type: FETCH_CHAT_MESSAGES_REQUEST });
    try {
        const { data } = await api.get(`/api/chats/${chatId}/messages`);
        dispatch({ type: FETCH_CHAT_MESSAGES_SUCCESS, messages: data });
    } catch (error) {
        console.error("Fetch chat messages error:", error.response?.data || error.message);
        dispatch({ type: FETCH_CHAT_MESSAGES_FAILURE, error: error.response?.data || error.message });
    }
};
