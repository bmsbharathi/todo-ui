import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTodoByIdComponent } from './get-todo-by-id.component';

describe('GetTodoByIdComponent', () => {
  let component: GetTodoByIdComponent;
  let fixture: ComponentFixture<GetTodoByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTodoByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTodoByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
