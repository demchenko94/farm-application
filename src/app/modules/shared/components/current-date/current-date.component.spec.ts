import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDateComponent } from './current-date.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('CurrentDateComponent', () => {
  let component: CurrentDateComponent;
  let fixture: ComponentFixture<CurrentDateComponent>;
  let store: MockStore;
  const initialState = { user: {}, place: {}, weather: {} };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentDateComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
