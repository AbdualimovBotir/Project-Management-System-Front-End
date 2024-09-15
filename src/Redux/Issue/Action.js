import api from "@/config/api";
import {
    FETCH_ISSUES_REQUEST,
    FETCH_ISSUES_SUCCESS,
    FETCH_ISSUES_FAILURE,
    FETCH_ISSUES_BY_ID_REQUEST,
    FETCH_ISSUES_BY_ID_SUCCESS,
    FETCH_ISSUES_BY_ID_FAILURE,
    CREATE_ISSUE_REQUEST,
    CREATE_ISSUE_SUCCESS,
    CREATE_ISSUE_FAILURE,
    UPDATE_ISSUE_REQUEST,
    UPDATE_ISSUE_SUCCESS,
    UPDATE_ISSUE_FAILURE,
    UPDATE_ISSUE_STATUS_REQUEST,
    UPDATE_ISSUE_STATUS_SUCCESS,
    UPDATE_ISSUE_STATUS_FAILURE,
    DELETE_ISSUE_REQUEST,
    DELETE_ISSUE_SUCCESS,
    DELETE_ISSUE_FAILURE,
    ASSIGNED_ISSUE_TO_USER_REQUEST,
    ASSIGNED_ISSUE_TO_USER_SUCCESS,
    ASSIGNED_ISSUE_TO_USER_FAILURE
} from "./ActionType";

// Fetch all issues
export const fetchIssues = (id) => async (dispatch) => {
    dispatch({ type: FETCH_ISSUES_REQUEST });
    try {
        const { data } = await api.get(`/api/issues/project/${id}`);
        dispatch({ type: FETCH_ISSUES_SUCCESS, issues: data });
    } catch (error) {
        console.error("Fetch issues error:", error.response?.data || error.message);
        dispatch({ type: FETCH_ISSUES_FAILURE, error: error.response?.data || error.message });
    }
};

// Fetch issue by ID
export const fetchIssueById = (id) => async (dispatch) => {
    dispatch({ type: FETCH_ISSUES_BY_ID_REQUEST });
    try {
        const { data } = await api.get(`/api/issues/${id}`);
        dispatch({ type: FETCH_ISSUES_BY_ID_SUCCESS, issue: data });
    } catch (error) {
        console.error("Fetch issue by ID error:", error.response?.data || error.message);
        dispatch({ type: FETCH_ISSUES_BY_ID_FAILURE, error: error.response?.data || error.message });
    }
};

// Create a new issue
export const createIssue = (issue) => async (dispatch) => {
    dispatch({ type: CREATE_ISSUE_REQUEST });
    try {
        const { data } = await api.post('/api/issues', issue);
        dispatch({ type: CREATE_ISSUE_SUCCESS, issue: data });
    } catch (error) {
        console.error("Create issue error:", error.response?.data || error.message);
        dispatch({ type: CREATE_ISSUE_FAILURE, error: error.response?.data || error.message });
    }
};

// Update an issue
export const updateIssue = (id, issue) => async (dispatch) => {
    dispatch({ type: UPDATE_ISSUE_REQUEST });
    try {
        const { data } = await api.put(`/api/issues/${id}`, issue);
        dispatch({ type: UPDATE_ISSUE_SUCCESS, issue: data });
    } catch (error) {
        console.error("Update issue error:", error.response?.data || error.message);
        dispatch({ type: UPDATE_ISSUE_FAILURE, error: error.response?.data || error.message });
    }
};

// Update issue status
export const updateIssueStatus = (id, status) => async (dispatch) => {
    dispatch({ type: UPDATE_ISSUE_STATUS_REQUEST });
    try {
        const { data } = await api.put(`/api/issues/${id}/status/${status}`);
        dispatch({ type: UPDATE_ISSUE_STATUS_SUCCESS, issue: data });
    } catch (error) {
        console.error("Update issue status error:", error.response?.data || error.message);
        dispatch({ type: UPDATE_ISSUE_STATUS_FAILURE, error: error.response?.data || error.message });
    }
};

// Delete an issue
export const deleteIssue = (id) => async (dispatch) => {
    dispatch({ type: DELETE_ISSUE_REQUEST });
    try {
        await api.delete(`/api/issues/${id}`);
        dispatch({ type: DELETE_ISSUE_SUCCESS, issueId: id });
    } catch (error) {
        console.error("Delete issue error:", error.response?.data || error.message);
        dispatch({ type: DELETE_ISSUE_FAILURE, error: error.response?.data || error.message });
    }
};

// Assign issue to user
export const assignIssueToUser = (issueId, userId) => async (dispatch) => {
    dispatch({ type: ASSIGNED_ISSUE_TO_USER_REQUEST });
    try {
        const { data } = await api.post(`/api/issues/${issueId}/assign`, { userId });
        dispatch({ type: ASSIGNED_ISSUE_TO_USER_SUCCESS, assignment: data });
    } catch (error) {
        console.error("Assign issue to user error:", error.response?.data || error.message);
        dispatch({ type: ASSIGNED_ISSUE_TO_USER_FAILURE, error: error.response?.data || error.message });
    }
};
