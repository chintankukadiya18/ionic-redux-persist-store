import {Observable, from} from 'rxjs';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Platform} from '@ionic/angular';
import {catchError, map} from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import {User} from '../../core/models/user';


@Injectable()
export class LoginService {

    // private apiHost = 'https://reqres.in/api/login';
    private apiHost = 'https://my-json-server.typicode.com/typicode/demo/profile';

    constructor(private http: Http, private platform: Platform, private storage: Storage) {
    }

    public login(email: string, password: string): Observable<any> {
        return this.http.get(this.apiHost).pipe(
            map(response => response.json())
        );
    }

    public getAll(): Observable<any> {
        return from(this.storage.get('user'));
    }

    public addUser(user: User): Promise<any> {
       return this.storage.set('user', user);
    }
}
