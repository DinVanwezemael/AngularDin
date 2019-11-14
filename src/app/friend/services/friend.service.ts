import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend.model';
import { AddFriend } from '../models/add-friend.model';

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
    return this.http.get<Friend[]>("https://localhost:5001/api/friend/getverzoeken" + userID);
}

  stuurVerzoek(newFriend: AddFriend){
    console.log(newFriend);
    return this.http.post<AddFriend>("https://localhost:5001/api/Friend", newFriend);
  }

  accepteerVerzoek(updateFriend: Friend){
    return this.http.put<Friend>("https://localhost:5001/api/Friend/accept" + updateFriend.friendID, updateFriend);
  }

  verwijderVriend(reference: number){
    return this.http.delete("https://localhost:5001/api/Friend" + reference);
  }
}
