/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomAlertService } from './custom-alert.service';

describe('Service: CustomAlert', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomAlertService]
    });
  });

  it('should ...', inject([CustomAlertService], (service: CustomAlertService) => {
    expect(service).toBeTruthy();
  }));
});
