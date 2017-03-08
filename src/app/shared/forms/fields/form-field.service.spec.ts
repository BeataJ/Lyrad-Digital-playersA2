/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormFieldService } from './form-field.service';

describe('FormFieldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormFieldService]
    });
  });

  it('should ...', inject([FormFieldService], (service: FormFieldService) => {
    expect(service).toBeTruthy();
  }));
});
