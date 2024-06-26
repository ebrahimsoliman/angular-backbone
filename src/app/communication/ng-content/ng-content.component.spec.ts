import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentComponent } from './ng-content.component';
import {ContentchildComponent} from "../ngContent/contentchild/contentchild.component";

describe('NgContentComponent', () => {
  let component: NgContentComponent;
  let fixture: ComponentFixture<NgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentComponent ,ContentchildComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
