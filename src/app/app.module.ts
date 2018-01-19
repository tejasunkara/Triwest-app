import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { CallerProviderComponent } from './provider/caller-provider.component';
import { CallerProviderSearchComponent } from './provider/caller-provider-search.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineEditComponent } from './components/custom/inline-edit/inline-edit.component';
import { VeteranDetailsComponent } from './veteran-details/veteran-details.component';
import { VeteranDetailsModalComponent } from './veteran-details-modal/veteran-details-modal.component';
import { MatchPhoneTypePipe } from './core/pipes/match-phone-type.pipe';
import { MatchAddressTypePipe } from './core/pipes/match-address-type.pipe';
import { RemovePhoneTypePipe } from './core/pipes/remove-phone-type.pipe';
import { MultipleDatePickerModule } from './multiple-date-picker/multiple-date-picker.module';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    CallerProviderComponent,
    CallerProviderSearchComponent,
    InlineEditComponent,
    VeteranDetailsComponent,
    VeteranDetailsModalComponent,
    MatchPhoneTypePipe,
    MatchAddressTypePipe,
    RemovePhoneTypePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    MultipleDatePickerModule
  ],
  providers: [],
  entryComponents: [VeteranDetailsModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
