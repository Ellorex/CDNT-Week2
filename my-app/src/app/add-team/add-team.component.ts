import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COUNTRIES } from '../datasources';
import { Team } from '../../model/Team';
import { TeamService} from '../team.service';

@Component({
  selector: 'add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  countries: string[] = [];
  team: Team = new Team('', '', '', '', null, null, '');
 

  constructor(private teamService: TeamService, private router: Router) {  }

  ngOnInit() {
    this.countries = COUNTRIES;
  }
  onSubmit() {
    this.teamService.addTeam(this.team);
    this.router.navigate(["teams"]);
  }
//  TO DO : envoyer ces données au serveur via requête en post
}
