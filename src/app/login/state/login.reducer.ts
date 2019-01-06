import {LoginActionsTypes} from './login-actions-types';
import {LoginState} from './login.state';
import {BaseAction} from '../../core/models/base-action';

const initialState: LoginState = {
    loading: false,
    error: false,
    user: null
};

export function LoginReducer(state: LoginState = initialState, action: BaseAction) {
    switch (action.type) {
        case LoginActionsTypes.USER_LOGIN:
            return {...state, loading: true};

        case LoginActionsTypes.USER_LOGIN_SUCCESS:
            return {...state, user: action.payload.user, loading: false};

        case LoginActionsTypes.USER_LOGIN_ERROR:
            return {...state, loading: false, error: true};

        default:
            return state;
    }
}
