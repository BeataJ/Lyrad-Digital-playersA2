import { Component, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'profile-details',
  templateUrl: './player-profile-details.component.html',
  styleUrls: ['./player-profile-details.component.css']
})
export class PlayerProfileDetailsComponent implements  AfterContentInit, AfterContentChecked{
  ngAfterContentInit(){
      console.log("PlayerProfileDetailsComponent ngAfterContentInit called");
    }

    ngAfterContentChecked(){
    console.log("PlayerProfileDetailsComponent ngAfterContentChecked called");
    }
}
