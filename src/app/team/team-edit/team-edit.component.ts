import { Component,OnChanges, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

import { Team } from '../../shared/team';
import { FormField } from '../../shared/forms/fields/form-field';
import { FormFieldService } from '../../shared/forms/fields/form-field.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnChanges, OnInit {
 @Input()
 selectedTeam: Team;
 formFields: FormField[];
 teamEditForm: FormGroup;

  constructor(private formFieldService: FormFieldService) { }

  ngOnChanges(){
    if(this.selectedTeam)
    {
      this.formFields = this.formFieldService.getFieldForForm();

      if(this.formFields && this.formFields.length>0)
      {
        let controls = {};

        this.formFields.forEach(field => {
          controls[field.key] = new FormControl(this.selectedTeam[field.key]);
        });

        this.teamEditForm = new FormGroup(controls);
      }
      else {
        this.teamEditForm = new FormGroup({});
        //this.selectedTeam = null;
      }
    }
    else {
      this.teamEditForm = new FormGroup({});
    }
  }

  saveTeam() {
    for(var propertyName in this.teamEditForm.value){
      this.selectedTeam[propertyName] = this.teamEditForm.value[propertyName];
    }
  // Ensure that the form closes
  this.selectedTeam= null;
}

  ngOnInit() {
  }

}
