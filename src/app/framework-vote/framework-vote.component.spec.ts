import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkVoteComponent } from './framework-vote.component';

describe('FrameworkVoteComponent', () => {
  let component: FrameworkVoteComponent;
  let fixture: ComponentFixture<FrameworkVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
