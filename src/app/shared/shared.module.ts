import { NgModule } from '@angular/core';

import { RestApiService } from './restapi.service';
import { InjuryLookupService } from './lookup/injury-lookup.service';
import { TeamLookupService } from './lookup/team-lookup.service';
import { FormFieldService } from './forms/fields/form-field.service';

@NgModule({
  providers: [RestApiService, InjuryLookupService, TeamLookupService, FormFieldService], 
})
export class SharedModule { }
