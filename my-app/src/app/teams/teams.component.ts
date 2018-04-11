import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/Team';
import { COUNTRIES } from '../datasources';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  teamsfiltered: Team[] = []; 
  team_display: string = 'tableau';
  nbSelected: number = 0;
  countries: string[] = [];
  countrySelected: string = '0';

  constructor() { }

  ngOnInit() {
    let team1: Team = new Team('Juventus', 'Juventus-logo.png', 'Allegri', 'Allianz Stadium', 1897, 5, "Italie");
    let team2: Team = new Team('FC Monaco', 'monaco.png', 'Jardim', 'Stade Louis II', 1919, 3, "France");
    let team3: Team = new Team('PSG', 'psg-logo.png', 'Emery', 'Parc des Princes', 1970, 2, "France");
    let team4: Team = new Team('Real Madrid', 'real-madrid.png', 'Zidane', 'Santiago-Bernabeu', 1902, 4, 'Espagne');
    this.teams = [team1, team2, team3, team4]
    this.teamsfiltered = this.teams;
    this.countries = COUNTRIES;
  }

  addTeam() {
    let clubAmerica: Team = new Team('Club America', '', 'Herrera', 'Azteca', 1916, 2, "Mexique");
    this.teams.push(clubAmerica);
  }

  filterTeam() {
    if (this.countrySelected == '0') {
      this.teamsfiltered = this.teams;
    } else {
      this.teamsfiltered = this.teams.filter((team: Team) => team.country == this.countrySelected);
    }
  }
}
