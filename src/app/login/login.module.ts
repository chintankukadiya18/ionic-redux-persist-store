import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {StoreModule, ActionReducerMap} from '@ngrx/store';
import {IonicModule} from '@ionic/angular';
import {LoginPage} from './login.page';
import {EffectsModule} from '@ngrx/effects';
import {LoginReducer, LoginActions, LoginEffects, LoginService} from './state';
import {AppState} from '../core/app-state';

const routes: Routes = [
    {
        path: '',
        component: LoginPage
    }
];

const appReducer: ActionReducerMap<AppState> = {
    userState: LoginReducer
};

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        StoreModule.forRoot(appReducer),
        EffectsModule.forRoot([LoginEffects])
    ],
    declarations: [LoginPage],
    providers: [LoginActions, LoginService]
})
export class LoginPageModule {
}
