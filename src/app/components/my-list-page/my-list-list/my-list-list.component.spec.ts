import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListListComponent } from './my-list-list.component';

describe('MyListListComponent', () => {
  let component: MyListListComponent;
  let fixture: ComponentFixture<MyListListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
