import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenMonitorComponent } from './kitchen-monitor.component';

describe('KitchenMonitorComponent', () => {
  let component: KitchenMonitorComponent;
  let fixture: ComponentFixture<KitchenMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
