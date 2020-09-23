import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbittListComponent } from './orbitt-list.component';

describe('OrbittListComponent', () => {
  let component: OrbittListComponent;
  let fixture: ComponentFixture<OrbittListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbittListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbittListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
