import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBlogsComponent } from './read-blogs.component';

describe('ReadBlogsComponent', () => {
  let component: ReadBlogsComponent;
  let fixture: ComponentFixture<ReadBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
