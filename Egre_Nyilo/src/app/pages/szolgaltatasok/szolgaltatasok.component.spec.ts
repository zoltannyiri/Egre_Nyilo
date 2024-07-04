import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzolgaltatasokComponent } from './szolgaltatasok.component';

describe('SzolgaltatasokComponent', () => {
  let component: SzolgaltatasokComponent;
  let fixture: ComponentFixture<SzolgaltatasokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzolgaltatasokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SzolgaltatasokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
