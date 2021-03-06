import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Userlogin } from '../models/userlogin.model';
@Injectable({
providedIn: 'root'
})
export class AuthenticateService {
constructor(private _httpClient: HttpClient) { }

    authenticate(userlogin: Userlogin): Observable<User> {
        return this._httpClient.post<User>("https://localhost:5001/api/user/authenticate", userlogin);
    }

    insert(user: User){
        return this._httpClient.post<User>("https://localhost:5001/api/userbeheer/insert", user);
    }

    getAllUsers(userID : number): Observable<User[]>{
        return this._httpClient.get<User[]>("https://localhost:5001/api/userbeheer/getall" + userID);
    }

    getUser(userID: number){
        return this._httpClient.get<User>("https://localhost:5001/api/UserBeheer/getuser" + userID);
    }

    updateUser(user: User){
        return this._httpClient.put<User>("https://localhost:5001/api/UserBeheer/" + user.userID, user);
    }

    changePassword(user: User){
        return this._httpClient.put<User>("https://localhost:5001/api/UserBeheer/password/" + user.userID, user);
    }
}