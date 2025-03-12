import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleColor, ZkSideMenuComponent } from './zk-side-menu.component';
import { provideRouter } from '@angular/router';

describe('ZkSideMenuComponent', () => {
  let component: ZkSideMenuComponent;
  let fixture: ComponentFixture<ZkSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZkSideMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ZkSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signIn when logout button is clicked', () => {
    spyOn(component.signIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;
    expect(button).toBeTruthy();

    button.click();

    expect(component.signIn.emit).toHaveBeenCalled();
  });

  it('should call signOut when logout button is clicked', () => {
    spyOn(component.signOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;
    expect(button).toBeTruthy();

    button.click();

    expect(component.signOut.emit).toHaveBeenCalled();
  });

  it('should add default class color in title when titleColor is not defined', () => {
    const title = fixture.nativeElement.querySelector(
      '[data-title]'
    ) as HTMLSpanElement;

    expect(title.classList).toContain(TitleColor.purple);
  });

  it('should add class color in title when titleColor is defined correctlly', () => {
    const inputColor = TitleColor.red;
    fixture.componentRef.setInput('titleColor', inputColor);

    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector(
      '[data-title]'
    ) as HTMLSpanElement;

    expect(title.classList).toContain(inputColor);
  });
});
