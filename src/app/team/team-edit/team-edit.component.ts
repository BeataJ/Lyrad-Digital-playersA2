import { Component,OnChanges, OnInit, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

import { Team } from '../../shared/team';
import { FormField } from '../../shared/forms/fields/form-field';
import { FormFieldService } from '../../shared/forms/fields/form-field.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnChanges, OnInit, AfterViewInit, AfterViewChecked {
 @Input()
 selectedTeam: Team;
 formFields: FormField[];
 teamEditForm: FormGroup;
 showNotEditing: boolean;

  constructor(private formFieldService: FormFieldService) { }

  ngOnChanges(){
    if(this.selectedTeam)
    {
      this.showNotEditing = false;
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

  ngAfterViewInit(){
    console.log('TeamEditComponent ngAfterViewInit called.');
  }

  ngAfterViewChecked(){
    console.log('TeamEditComponent ngAfterViewChecked called.');
  }

  saveTeam() {
    for(var propertyName in this.teamEditForm.value){
      this.selectedTeam[propertyName] = this.teamEditForm.value[propertyName];
    }
  // Ensure that the form closes
  this.showNotEditing = true;
  this.selectedTeam= null;
}

  ngOnInit() {
  }

}
