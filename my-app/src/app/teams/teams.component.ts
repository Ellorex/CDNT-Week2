import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/Team';
import { COUNTRIES } from '../datasources';
import { TeamService } from '../team.service';

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

  constructor(private teamService: TeamService) {  }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
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
