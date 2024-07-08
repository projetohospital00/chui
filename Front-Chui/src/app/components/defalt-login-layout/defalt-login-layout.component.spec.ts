import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaltLoginLayoutComponent } from './defalt-login-layout.component';

describe('DefaltLoginLayoutComponent', () => {
  let component: DefaltLoginLayoutComponent;
  let fixture: ComponentFixture<DefaltLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaltLoginLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaltLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
