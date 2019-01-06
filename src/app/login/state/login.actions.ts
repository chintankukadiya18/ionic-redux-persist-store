import {Injectable} from '@angular/core';
import {LoginActionsTypes} from './login-actions-types';
import {BaseAction} from '../../core/models/base-action';
import {User} from '../../core/models/user';
import {LoginService} from './login.service';

@Injectable()
export class LoginActions {

    constructor(private loginService: LoginService){ }

    public login(email: string, password: string): BaseAction {
        return {
            type: LoginActionsTypes.USER_LOGIN,
            payload: {
                email: email,
                password: password
            }
        };
    }

    public  loginSuccess(user: User): BaseAction {
        this.loginService.addUser(user).then();
        return {
            type: LoginActionsTypes.USER_LOGIN_SUCCESS,
            payload: {
                user: user
            }
        };
    }
}
