import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConfiguratorComponent } from './card-configurator.component';

describe('CardConfiguratorComponent', () => {
  let component: CardConfiguratorComponent;
  let fixture: ComponentFixture<CardConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConfiguratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
