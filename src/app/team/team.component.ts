import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../common/restapi.service';
import { Team } from '../common/team';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  listOfTeams: Team[]; 

  constructor(private apiService: RestApiService) { }

  ngOnInit() {
    this.listOfTeams = this.apiService.getListOfTeams();
  }

}
