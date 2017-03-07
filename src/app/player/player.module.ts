import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player.routing';
import { SharedModule } from '../shared/shared.module';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { PlayerProfileTransclusionComponent } from './player-profile/transclusion/player-profile-transclusion.component';
import { PlayerProfileDetailsComponent } from './player-profile/transclusion/player-profile-details.component';
import { PlayerProfileHeadingComponent } from './player-profile/transclusion/player-profile-heading.component';
import { PlayerProfileDetailEntryComponent } from './player-profile/transclusion/player-profile-detail-entry.component';






@NgModule({
    imports: [
              BrowserModule, 
              ReactiveFormsModule,
              FormsModule, 
              PlayerRoutingModule, 
              SharedModule,
              ],
    declarations: [
        PlayerComponent, 
        PlayerProfileComponent, 
        RegistrationComponent, 
        PlayerProfileTransclusionComponent, 
        PlayerProfileDetailsComponent, 
        PlayerProfileHeadingComponent,  
        PlayerProfileDetailEntryComponent
        ],
})
export class PlayerModule {}