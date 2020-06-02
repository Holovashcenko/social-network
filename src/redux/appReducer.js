import { auth } from "./authReducer";

const INITIALIZED_SUCCEESS = "INITIALIZED_SUCCEESS";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCEESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export const initializedSuccess = (initialzed) => ({ type: INITIALIZED_SUCCEESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(auth());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
};

export default appReducer;