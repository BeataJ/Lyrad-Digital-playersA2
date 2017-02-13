import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team.routing';
import { SharedModule } from '../shared/shared.module';
import { TeamEditComponent } from './team-edit/team-edit.component';

@NgModule({
    imports: [BrowserModule, FormsModule, TeamRoutingModule, SharedModule],
    
    declarations: [TeamComponent, TeamEditComponent],
})
export class TeamModule {}
