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

// Define the initial state
const initialState = {
    messages: [],            // Array to hold messages fetched from chat
    chat: null,              // Holds chat data (e.g., chat details, project chat, etc.)
    loading: false,          // General loading state for fetching data
    sending: false,          // State to track if a message is being sent
    error: null,             // Stores any error that occurs in the process
};

// The reducer function to handle chat-related actions
const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        // Handling message fetch requests
        case FETCH_MESSAGES_REQUEST:
        case FETCH_CHAT_BY_PROJECT_REQUEST:
        case FETCH_CHAT_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,  // Set loading to true during fetch
                error: null,    // Reset error state
            };

        // Handling message fetch success
        case FETCH_MESSAGES_SUCCESS:
        case FETCH_CHAT_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,         // Stop loading
                messages: action.messages,  // Update the messages state with fetched messages
                error: null,               // Reset error in case previous errors existed
            };

        // Handling chat fetch by project success
        case FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,         // Stop loading
                chat: action.chat,      // Set the chat state to fetched chat data
                error: null,            // Reset error
            };

      
        // Handling fetch failures
        case FETCH_MESSAGES_FAILURE:
        case FETCH_CHAT_BY_PROJECT_FAILURE:
        case FETCH_CHAT_MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,         // Stop loading
                error: action.error,    // Set the error state with error message
            };

        // Handling send message request
        case SEND_MESSAGE_REQUEST:
            return {
                ...state,
                sending: true,          // Set sending state to true
                error: null,            // Reset any previous error
            };

        // Handling send message success
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                sending: false,         // Reset sending state
                messages: [...state.messages, action.message],  // Append the new message to the messages array
                error: null,            // Clear errors if any
            };

        // Handling send message failure
        case SEND_MESSAGE_FAILURE:
            return {
                ...state,
                sending: false,         // Reset sending state
                error: action.error,    // Capture the error that occurred during message sending
            };

        // Default case when action type does not match
        default:
            return state;  // Return the current state if no action type matches
    }
};

// Export the chat reducer as the default export
export default chatReducer;
