import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickerPage } from './clicker.page';

describe('ClickerPage', () => {
  let component: ClickerPage;
  let fixture: ComponentFixture<ClickerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
