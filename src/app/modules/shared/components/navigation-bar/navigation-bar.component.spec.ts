import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist navigation list element', () => {
    const navigationBar: HTMLElement = fixture.nativeElement;
    const element = navigationBar.querySelector('.navigation-list');
    expect(element).toBeTruthy();
  });

  it('should exist 6 navigation items with icon', () => {
    const navigationBar: HTMLElement = fixture.nativeElement;
    const navigationItemsLength = navigationBar.querySelectorAll('.navigation-list li > i').length;
    expect(navigationItemsLength).toEqual(6);
  });
});
