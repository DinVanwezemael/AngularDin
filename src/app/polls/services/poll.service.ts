import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll.model';
import { PollUser } from '../models/poll-user.model';
import { PollDto } from '../models/poll-dto.model';
import { Optie } from '../models/optie.model';
import { Antwoord } from '../models/antwoord.model';
import { Uitnodiging } from '../models/uitnodiging.model';
import { Friend } from 'src/app/friend/models/friend.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }


  insertPoll(pollDto: PollDto){
    return this.http.post<PollDto>("https://localhost:5001/api/PollUser", pollDto);
  }

  insertOptie(optie: Optie){
    return this.http.post<Optie>("https://localhost:5001/api/optie/", optie)
  }

  getPollByUser(userID: number): Observable<any[]>{
    return this.http.get<PollDto[]>("https://localhost:5001/api/polluser/" + userID);
}

  deletePoll(pollID: number): Observable<PollUser>{
    console.log(pollID);
    return this.http.delete<PollUser>("https://localhost:5001/api/polluser/" + pollID);
  }

  verwijderOptie(optieID: number){
    return this.http.delete<Friend>("https://localhost:5001/api/optie/" + optieID);
  }

  stemPoll(antwoord: Antwoord){
    return this.http.post<Antwoord>("https://localhost:5001/api/Antwoord", antwoord);
  }

  getPoll(pollID: number): Observable<PollDto[]>{
    console.log(pollID);
    return this.http.get<PollDto[]>("https://localhost:5001/api/polluser/bewerk" + pollID);
  }

  vriendUitnodigenVoorPoll(uitnodiging: Uitnodiging){
    return this.http.post<Uitnodiging>("https://localhost:5001/api/Uitnodiging", uitnodiging);
  }

  uitgenodigdePolls(userID: number): Observable<any[]>{
    return this.http.get<PollDto[]>("https://localhost:5001/api/polluser/uitgenodigd" + userID);
  }

}