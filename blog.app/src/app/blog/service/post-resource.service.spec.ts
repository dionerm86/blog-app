import { TestBed } from '@angular/core/testing';

import { PostResourceService } from './post-resource.service';

describe('PostResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostResourceService = TestBed.get(PostResourceService);
    expect(service).toBeTruthy();
  });
});
