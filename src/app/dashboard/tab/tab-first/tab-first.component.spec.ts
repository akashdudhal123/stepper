import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFirstComponent } from './tab-first.component';

describe('TabFirstComponent', () => {
  let component: TabFirstComponent;
  let fixture: ComponentFixture<TabFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabFirstComponent]
    });
    fixture = TestBed.createComponent(TabFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
