import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoginActionsTypes} from './login-actions-types';
import {BaseAction} from '../../core/models/base-action';
import {switchMap} from 'rxjs/operators';
import {LoginService} from './login.service';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {LoginActions} from './login.actions';
import {User} from '../../core/models/user';

@Injectable()
export class LoginEffects {

    constructor(private actions: Actions, private loginService: LoginService, private loginAction: LoginActions) {}

    @Effect()
    login = this.actions.pipe(
        ofType(LoginActionsTypes.USER_LOGIN),
        switchMap((action: BaseAction) => this.loginService.login(action.payload.email, action.payload.password).pipe(
            map((response: User) => this.loginAction.loginSuccess(response))
            )
        )
    );

    @Effect()
    getUser = this.loginService.getAll().pipe(
        map((user: User) => this.loginAction.loginSuccess(user))
    );
}
