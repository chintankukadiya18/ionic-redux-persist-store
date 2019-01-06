import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AppState} from '../core/app-state';
import {Store} from '@ngrx/store';
import {LoginActions} from './state/login.actions';
import {Router} from '@angular/router';
import {LoginState} from './state/login.state';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private username: string;
    private password: string;
    private error: boolean;
    private userStateSubscription: Subscription;

    constructor(private store: Store<AppState>, private loginActions: LoginActions, private router: Router) {
    }

    ionViewDidEnter() {
        this.userStateSubscription = this.store.select('userState').subscribe((userState: LoginState) => {
            this.error = userState.error;
            if (userState.user) {
                this.router.navigateByUrl('/home');
            }
        });
    }

    ionViewDidLeave() {
        this.userStateSubscription.unsubscribe();
    }

    ngOnInit() {
    }

    login() {
        this.store.dispatch(this.loginActions.login(this.username, this.password));
    }
}
