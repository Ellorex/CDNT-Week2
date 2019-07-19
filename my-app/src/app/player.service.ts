import { Injectable } from '@angular/core';
import { Player } from '../model/Player';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

const URL_SERVER ='http://localhost:5000';

@Injectable()
export class PlayerService {

  private players: Player[] = [];
  constructor(private http: Http) { }

  public getPlayersFromServer(): Observable<any> {
    return this.http.get(URL_SERVER + '/players')
    .map( res => res.json());
  }
  public setPlayers(players: Player[]) {
    this.players = players;
  }

}
