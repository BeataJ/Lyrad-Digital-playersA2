import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, TeamRoutingModule],
    declarations: [TeamComponent],
})
export class TeamModule {}
