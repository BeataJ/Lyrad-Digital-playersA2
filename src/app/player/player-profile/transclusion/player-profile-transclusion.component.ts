import { Component, AfterContentInit, AfterContentChecked, ContentChild, QueryList } from '@angular/core';

import { PlayerProfileDetailEntryComponent } from './player-profile-detail-entry.component';
import { PlayerProfileHeadingComponent } from './player-profile-heading.component';

@Component({
  selector: 'player-profile',
  templateUrl: './player-profile-transclusion.component.html',
  styleUrls: ['./player-profile-transclusion.component.css']
})
export class PlayerProfileTransclusionComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild(PlayerProfileDetailEntryComponent) contentChildren:QueryList<PlayerProfileDetailEntryComponent>;
  @ContentChild(PlayerProfileHeadingComponent) playerProfileHeadingComponent: PlayerProfileHeadingComponent;

  ngAfterContentInit(){
    console.log("PlayerProfileTransclusionComponent ngAfterContentInit called");
    console.log(this.contentChildren);
    console.log(this.playerProfileHeadingComponent);
  }

  ngAfterContentChecked(){
   console.log("PlayerProfileTransclusionComponent ngAfterContentChecked called");
  }

}
