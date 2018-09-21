export default function userReducer(state = [], action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                connected: true,
                username: action.name
            };
        case 'LOGOUT':
            return {
                ...state,
                connected: false,
                username: null
            };

        default:
            return state;
    }
}