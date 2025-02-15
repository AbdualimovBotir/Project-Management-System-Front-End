import api from "@/config/api";
import {
    ACCEPT_INVITATION_REQUEST,
    ACCEPT_INVITATION_SUCCESS,
    CREATE_PROJECT_REQUEST,
    CREATE_PROJECT_SUCCESS,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    FETCH_PROJECT_BY_ID_REQUEST,
    FETCH_PROJECT_BY_ID_SUCCESS,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    INVITE_TO_PROJECT_REQUEST,
    INVITE_TO_PROJECT_SUCCESS,
    SEARCH_PROJECT_REQUEST,
    SEARCH_PROJECT_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    FETCH_PROJECT_BY_ID_FAILURE,
    CREATE_PROJECT_FAILURE,
    SEARCH_PROJECT_FAILURE,
    DELETE_PROJECT_FAILURE,
    INVITE_TO_PROJECT_FAILURE,
    ACCEPT_INVITATION_FAILURE
} from "./ActionTypes";

export const fetchProjects = ({ category, tag }) => async (dispatch) => {
    dispatch({ type: FETCH_PROJECTS_REQUEST });
    try {
        const { data } = await api.get("/api/projects", { params: { category, tag } });
        dispatch({ type: FETCH_PROJECTS_SUCCESS, projects: data });
    } catch (error) {
        console.error("Fetch projects error:", error.response?.data || error.message);
        dispatch({ type: FETCH_PROJECTS_FAILURE, error: error.response?.data || error.message });
    }
};

export const searchProjects = (keyword) => async (dispatch) => {
    dispatch({ type: SEARCH_PROJECT_REQUEST });
    try {
        const { data } = await api.get(`/api/projects/search?keyword=${keyword}`);
        dispatch({ type: SEARCH_PROJECT_SUCCESS, projects: data });
    } catch (error) {
        console.error("Search projects error:", error.response?.data || error.message);
        dispatch({ type: SEARCH_PROJECT_FAILURE, error: error.response?.data || error.message });
    }
};

export const createProject = (projectData) => async (dispatch) => {
    dispatch({ type: CREATE_PROJECT_REQUEST });
    try {
        const { data } = await api.post("/api/projects", projectData);
        dispatch({ type: CREATE_PROJECT_SUCCESS, project: data });
    } catch (error) {
        console.error("Create project error:", error.response?.data || error.message);
        dispatch({ type: CREATE_PROJECT_FAILURE, error: error.response?.data || error.message });
    }
};

export const fetchProjectById = (projectId) => async (dispatch) => {
    dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST });
    try {
        const { data } = await api.get(`/api/projects/${projectId}`);
        dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, project: data });
    } catch (error) {
        console.error("Fetch project by ID error:", error.response?.data || error.message);
        dispatch({ type: FETCH_PROJECT_BY_ID_FAILURE, error: error.response?.data || error.message });
    }
};

export const deleteProject = (projectId) => async (dispatch) => {
    dispatch({ type: DELETE_PROJECT_REQUEST });
    try {
        const { data } = await api.delete(`/api/projects/${projectId}`);
        dispatch({ type: DELETE_PROJECT_SUCCESS, projectId });
    } catch (error) {
        console.error("Delete project error:", error.response?.data || error.message);
        dispatch({ type: DELETE_PROJECT_FAILURE, error: error.response?.data || error.message });
    }
};

export const inviteToProject = ({ email, projectId }) => async (dispatch) => {
    dispatch({ type: INVITE_TO_PROJECT_REQUEST });
    try {
        const { data } = await api.post("/api/projects/invite", { email, projectId });
        dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
    } catch (error) {
        console.error("Invite to project error:", error.response?.data || error.message);
        dispatch({ type: INVITE_TO_PROJECT_FAILURE, error: error.response?.data || error.message });
    }
};

export const acceptInvitation = ({ invitationToken, navigate }) => async (dispatch) => {
    dispatch({ type: ACCEPT_INVITATION_REQUEST });
    try {
        const { data } = await api.get("/api/projects/accept_invitation", {
            params: { token: invitationToken }
        });
        navigate(`/project/${data.projectId}`);
        dispatch({ type: ACCEPT_INVITATION_SUCCESS, payload: data });
    } catch (error) {
        console.error("Accept invitation error:", error.response?.data || error.message);
        dispatch({ type: ACCEPT_INVITATION_FAILURE, error: error.response?.data || error.message });
    }
};
