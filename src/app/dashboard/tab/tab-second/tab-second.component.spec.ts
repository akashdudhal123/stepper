import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSecondComponent } from './tab-second.component';

describe('TabSecondComponent', () => {
  let component: TabSecondComponent;
  let fixture: ComponentFixture<TabSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabSecondComponent]
    });
    fixture = TestBed.createComponent(TabSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
