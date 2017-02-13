import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../shared/restapi.service';
import { Team } from '../shared/team';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  listOfTeams: Team[];
  selectedTeam: Team; 

  constructor(private apiService: RestApiService) { }

  ngOnInit() {
    this.listOfTeams = this.apiService.getListOfTeams();
  }

  selectTeam(selectedTeam: Team){
    this.selectedTeam = selectedTeam;
  }

}
