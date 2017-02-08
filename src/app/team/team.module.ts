import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [BrowserModule, FormsModule, TeamRoutingModule, SharedModule],
    
    declarations: [TeamComponent],
})
export class TeamModule {}
