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
    //this.teams = this.teamService.getTeams();

    // let res = this.teamService.getTeamsFromServer();
    // console.log('res composant' + res);

    this.teamService.getTeamsFromServer()
      .subscribe(res => {
        res.forEach(element => {
          let team:Team = new Team(element.name, element.logo, element.coach, element.stadium, element.founded, element.cup, element.country);
          this.teamsfiltered.push(team);
        });
        this.teamsfiltered = this.teams; // initialisation de teamsFiltered
        this.teamService.setTeams(this.teams);      
    });

    this.teamsfiltered = this.teams;
    this.countries = COUNTRIES;
  }

  filterTeam() {
    if (this.countrySelected == '0') {
      this.teamsfiltered = this.teams;
    } else {
      this.teamsfiltered = this.teams.filter((team: Team) => team.country == this.countrySelected);
    }
  }
}
