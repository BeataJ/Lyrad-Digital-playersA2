import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player.routing';
import { SharedModule } from '../shared/shared.module';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
    imports: [BrowserModule, FormsModule, PlayerRoutingModule, SharedModule],
    declarations: [PlayerComponent, PlayerProfileComponent, RegistrationComponent],
})
export class PlayerModule {}