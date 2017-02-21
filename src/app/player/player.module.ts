import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player.routing';
import { SharedModule } from '../shared/shared.module';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, PlayerRoutingModule, SharedModule],
    declarations: [PlayerComponent, PlayerProfileComponent, RegistrationComponent],
})
export class PlayerModule {}