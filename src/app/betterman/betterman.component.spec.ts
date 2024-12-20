import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettermanComponent } from './betterman.component';

describe('BettermanComponent', () => {
  let component: BettermanComponent;
  let fixture: ComponentFixture<BettermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettermanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BettermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
