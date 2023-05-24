import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickerConfigPage } from './clicker-config.page';

describe('ClickerConfigPage', () => {
  let component: ClickerConfigPage;
  let fixture: ComponentFixture<ClickerConfigPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClickerConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
