import { Injectable } from '@angular/core';
import { Player } from '../model/Player';
import { Http } from '@angular/http';

const URL_SERVER ='http://localhost:5000';

@Injectable()
export class PlayerService {

  private players: Player[] = [];
  constructor(private http: Http) { }

  public getPlayersFromServer() {
    return this.http.get(URL_SERVER + '/players')
    .map( res => res.json());
  }
  public setPlayers(players: Player[]) {
    this.players = players;
  }

}
