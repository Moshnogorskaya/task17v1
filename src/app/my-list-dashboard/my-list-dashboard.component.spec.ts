import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListDashboardComponent } from './my-list-dashboard.component';

describe('MyListDashboardComponent', () => {
  let component: MyListDashboardComponent;
  let fixture: ComponentFixture<MyListDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
