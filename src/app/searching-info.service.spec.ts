import { TestBed } from '@angular/core/testing';

import { SearchingInfoService } from './searching-info.service';

describe('SearchingInfoService', () => {
  let service: SearchingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
