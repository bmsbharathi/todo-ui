import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTodosComponent } from './get-all-todos.component';

describe('GetAllTodosComponent', () => {
  let component: GetAllTodosComponent;
  let fixture: ComponentFixture<GetAllTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
