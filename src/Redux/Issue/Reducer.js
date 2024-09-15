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
} from './ActionType';

const initialState = {
  issues: [],
  currentIssue: null,
  loading: false,
  error: null
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_ISSUES_REQUEST:
      case FETCH_ISSUES_BY_ID_REQUEST:
      case CREATE_ISSUE_REQUEST:
      case UPDATE_ISSUE_REQUEST:
      case UPDATE_ISSUE_STATUS_REQUEST:
      case DELETE_ISSUE_REQUEST:
      case ASSIGNED_ISSUE_TO_USER_REQUEST:
          return {
              ...state,
              loading: true,
              error: null,
          };

      case FETCH_ISSUES_SUCCESS:
          return {
              ...state,
              issues: action.payload,
              loading: false,
          };

      case FETCH_ISSUES_BY_ID_SUCCESS:
          return {
              ...state,
              currentIssue: action.payload,
              loading: false,
          };

      case CREATE_ISSUE_SUCCESS:
          return {
              ...state,
              issues: [...state.issues, action.payload],
              loading: false,
          };

      case UPDATE_ISSUE_SUCCESS:
          return {
              ...state,
              issues: state.issues.map((issue) =>
                  issue.id === action.payload.id ? action.payload : issue
              ),
              loading: false,
          };

      case UPDATE_ISSUE_STATUS_SUCCESS:
          return {
              ...state,
              issues: state.issues.map((issue) =>
                  issue.id === action.payload.id ? { ...issue, status: action.payload.status } : issue
              ),
              loading: false,
          };

      case DELETE_ISSUE_SUCCESS:
          return {
              ...state,
              issues: state.issues.filter((issue) => issue.id !== action.payload),
              loading: false,
          };

      case ASSIGNED_ISSUE_TO_USER_SUCCESS:
          return {
              ...state,
              issues: state.issues.map((issue) =>
                  issue.id === action.payload.issueId ? { ...issue, assignee: action.payload.userId } : issue
              ),
              loading: false,
          };

      case FETCH_ISSUES_FAILURE:
      case FETCH_ISSUES_BY_ID_FAILURE:
      case CREATE_ISSUE_FAILURE:
      case UPDATE_ISSUE_FAILURE:
      case UPDATE_ISSUE_STATUS_FAILURE:
      case DELETE_ISSUE_FAILURE:
      case ASSIGNED_ISSUE_TO_USER_FAILURE:
          return {
              ...state,
              loading: false,
              error: action.error,
          };

      default:
          return state;
  }
};

export default issueReducer; // Ensure you use default export
