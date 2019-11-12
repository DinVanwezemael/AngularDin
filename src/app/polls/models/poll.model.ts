export class Poll {
    pollID: number;
    naam: string;
    userID: number;
    pollUserID: number;

    constructor(pollID: number, naam: string, userID: number, pollUserID: number){
        this.pollID = pollID;
        this.naam = naam;
        this.userID = userID;
        this.pollUserID = pollUserID;
    }
}
