import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { CallerProviderComponent } from './provider/caller-provider.component';
import { CallerProviderSearchComponent } from './provider/caller-provider-search.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { TrainingService } from './training/training.service';
import { ProviderService } from './provider/caller-provider.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [
        AppComponent, TrainingComponent, CallerProviderComponent, CallerProviderSearchComponent
      ],
      providers: [TrainingService, ProviderService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

@Component({
  selector: 'caller-provider-search',
  template: '<caller-provider [data]="rows"></caller-provider>'
})
class CallerProviderSearchComponent {
  rows: any;
}

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));  
});
