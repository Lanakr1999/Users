import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTodosComponent } from './post-todos.component';

describe('PostTodosComponent', () => {
  let component: PostTodosComponent;
  let fixture: ComponentFixture<PostTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
