/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataReciverService } from './dataReciver.service';

describe('Service: DataReciver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataReciverService]
    });
  });

  it('should ...', inject([DataReciverService], (service: DataReciverService) => {
    expect(service).toBeTruthy();
  }));
});
