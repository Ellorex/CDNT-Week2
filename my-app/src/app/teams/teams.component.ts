import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/Team';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  team_display: string = 'fiche';

  constructor() { }

  ngOnInit() {
    let team1: Team = new Team('Juventus', 'Juventus-logo.png', 'Allegri', 'Allianz Stadium', 1897);
    let team2: Team = new Team('FC Monaco', 'monaco.png', 'Allegri', 'Stade Louis II', 1897);
    let team3: Team = new Team('PSG', 'psg-logo.png', 'Emery', 'Parc des Princes', 1970);
    this.teams = [team1, team2, team3]
  }

}
