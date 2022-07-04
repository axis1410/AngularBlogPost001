import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostblogsComponent } from './postblogs.component';

describe('PostblogsComponent', () => {
  let component: PostblogsComponent;
  let fixture: ComponentFixture<PostblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
