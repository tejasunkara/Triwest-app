import { Component } from '@angular/core';

import { TrainingComponent } from './training/training.component';
import { CallerProviderComponent } from './provider/caller-provider.component';
import { CallerProviderSearchComponent } from './provider/caller-provider-search.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { VeteranDetailsComponent } from './veteran-details/veteran-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  
  name: string = 'add name';
  
  
}
