import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params} from '@angular/router';
import { Team } from '../../model/Team';
import { TeamService } from '../team.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  // team: Team = new Team('Juventus', 'Juventus-logo.png', 'Allegri', 1897);

  @Input('data-team')team: Team;

  constructor(
    private teamService: TeamService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (!this.team) {
      // si team n'est pas défini, on demande au service de nous donner l'info manquante liée au paramètre url (le nom de l'équipe)
      
      //Récupération du paramètre url
      this.activatedRoute.params
        .subscribe(item => this.team = this.teamService.getTeamByName(item.name));
    }
    
    // console.log(this.activatedRoute.params);
  }

}
