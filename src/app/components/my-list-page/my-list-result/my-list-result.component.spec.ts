import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListResultComponent } from './my-list-result.component';

describe('MyListResultComponent', () => {
  let component: MyListResultComponent;
  let fixture: ComponentFixture<MyListResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
