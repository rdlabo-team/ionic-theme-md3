import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchbarPage } from './searchbar.page';
import { testConfig } from '../../../../../util/test.config';

describe('SearchbarPage', () => {
  let component: SearchbarPage;
  let fixture: ComponentFixture<SearchbarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: testConfig.providers,
    }).compileComponents();
    fixture = TestBed.createComponent(SearchbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
