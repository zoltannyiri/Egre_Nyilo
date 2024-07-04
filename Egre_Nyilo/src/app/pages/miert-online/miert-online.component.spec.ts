import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiertOnlineComponent } from './miert-online.component';

describe('MiertOnlineComponent', () => {
  let component: MiertOnlineComponent;
  let fixture: ComponentFixture<MiertOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiertOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiertOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
