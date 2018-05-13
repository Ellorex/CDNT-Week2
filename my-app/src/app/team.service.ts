import { Injectable } from '@angular/core';
import { Team } from '../model/Team';
import { Http } from '@angular/http';

const URL_SERVER ='http://localhost:5000';

@Injectable()
export class TeamService {
  // private teams: Team[] = [
  //   new Team('Juventus', 'Juventus-logo.png', 'Allegri', 'Allianz Stadium', 1897, 5, "Italie"),
  //   new Team('AS Monaco', 'monaco.png', 'Jardim', 'Stade Louis II', 1919, 3, "France"),
  //   new Team('PSG', 'psg-logo.png', 'Emery', 'Parc des Princes', 1970, 2, "France"),
  //   new Team('Real Madrid', 'real-madrid.png', 'Zidane', 'Santiago-Bernabeu', 1902, 4, 'Espagne'),
  // ];
  private teams: Team[] = [];

  constructor(private http: Http) { }

  public getTeams() {
    return this.teams;
  }
  public getTeamsFromServer() {
    return this.http.get(URL_SERVER + '/teams')
    .map( res => res.json());
  }
  // Une requête http est par nature asynchrone. Le subscribe est configuré pour ne se lancer qu'une fois qu'il a reçu la réponse mais il ne doit pas apparâitre dans le service. C'est au composant qui a appelé le service de souscrire

  public getTeamByName(name: string): Team {
    let team: Team[] = [];
    team = this.teams.filter((t) => t.name == name);
    return team[0];
  }

  public addTeam(team: Team) {
    this.teams.push(team);
  }
  
  public setTeams(teams: Team[]) {
    this.teams = teams;
  }
}
