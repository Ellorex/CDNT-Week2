import { Injectable } from '@angular/core';
import { Team } from '../model/Team';

@Injectable()
export class TeamService {
  private teams: Team[] = [
    new Team('Juventus', 'Juventus-logo.png', 'Allegri', 'Allianz Stadium', 1897, 5, "Italie"),
    new Team('AS Monaco', 'monaco.png', 'Jardim', 'Stade Louis II', 1919, 3, "France"),
    new Team('PSG', 'psg-logo.png', 'Emery', 'Parc des Princes', 1970, 2, "France"),
    new Team('Real Madrid', 'real-madrid.png', 'Zidane', 'Santiago-Bernabeu', 1902, 4, 'Espagne'),
  ];

  constructor() { }

  public getTeams() {
    return this.teams;
  }

  public getTeamByName(name: string): Team {
    let team: Team[] = [];
    team = this.teams.filter((t) => t.name == name);
    return team[0];
  }

}
