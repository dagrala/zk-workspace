import { TestBed } from '@angular/core/testing';

import { ZkSideMenuService } from './zk-side-menu.service';

describe('ZkSideMenuService', () => {
  let service: ZkSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZkSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
