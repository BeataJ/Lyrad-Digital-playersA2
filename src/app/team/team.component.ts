import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { RestApiService } from '../shared/restapi.service';
import { Team } from '../shared/team';
import { TeamEditComponent } from './team-edit/team-edit.component';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, AfterViewInit, AfterViewChecked {
  listOfTeams: Team[];
  selectedTeam: Team; 
  @ViewChild(TeamEditComponent) teamEditComponent: TeamEditComponent;
  @ViewChildren("wins") winCells: QueryList<ElementRef>;

  constructor(private apiService: RestApiService) { }

  ngOnInit() {
    this.listOfTeams = this.apiService.getListOfTeams();
  }

  ngAfterViewInit(){
    this.teamEditComponent.showNotEditing = true;
    console.log('TeamComponeny ngAfterViewInit called.');
  }

  ngAfterViewChecked(){
    console.log('TeamComponeny ngAfterViewChecked called.');

    this.hightlightMostWinningTeam();
  }


  selectTeam(selectedTeam: Team){
    this.selectedTeam = selectedTeam;
  }

 private hightlightMostWinningTeam(){
   var highlightIndex = 0;
   var currentIndex = 0;
   var highestWinvalue = 0;

   this.winCells.forEach(wc => {
     wc.nativeElement.parentNode.style.backgroundColor = '';
     wc.nativeElement.parentNode.style.color = '';

     var currentWins = Number(wc.nativeElement.innerText);

     if(currentWins > highestWinvalue) {
       highlightIndex = currentIndex;
       highestWinvalue = currentWins;
     }

     currentIndex++;
   });

   var item = this.winCells.find((item, index) => index == highlightIndex).nativeElement.parentNode;
   item.style.backgroundColor = 'red';
   item.style.color = 'white';
 }

}
