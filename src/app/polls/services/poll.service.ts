import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll.model';
import { PollUser } from '../models/poll-user.model';
import { PollDto } from '../models/poll-dto.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }


  insertPoll(pollDto: PollDto){
    return this.http.post<PollDto>("https://localhost:5001/api/PollUser", pollDto);
  }

  getPollByUser(userID: number): Observable<any[]>{
    return this.http.get<any[]>("https://localhost:5001/api/polluser/" + userID);
}

  deletePoll(pollID: number): Observable<PollUser>{
    console.log(pollID);
    return this.http.delete<PollUser>("https://localhost:5001/api/polluser/" + pollID);
  }


}


