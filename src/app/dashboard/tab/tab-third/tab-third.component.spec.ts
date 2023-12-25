import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabThirdComponent } from './tab-third.component';

describe('TabThirdComponent', () => {
  let component: TabThirdComponent;
  let fixture: ComponentFixture<TabThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabThirdComponent]
    });
    fixture = TestBed.createComponent(TabThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
