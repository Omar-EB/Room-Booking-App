import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListunitComponent } from './listunit.component';

describe('ListunitComponent', () => {
  let component: ListunitComponent;
  let fixture: ComponentFixture<ListunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
