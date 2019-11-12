import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend.model';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }

  getFriendsUser(userID: number): Observable<Friend[]>{
    return this.http.get<Friend[]>("https://localhost:5001/api/friend/" + userID);
}

  getAlleUsers(): Observable<Friend[]>{
    return this.http.get<Friend[]>("https://localhost:5001/api/friends")
  }

  getVriendVerzoeken(userID: number): Observable<Friend[]>{
    return this.http.get<Friend[]>("https://localhost:5001/api/friend/verzoeken" + userID);
}

  stuurVerzoek(friend: Friend){
    return this.http.post<Friend>("https://localhost:5001/api/friend/insert", friend);
  }
}
