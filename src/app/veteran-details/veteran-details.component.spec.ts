import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatchPhoneTypePipe } from '../core/pipes/match-phone-type.pipe';
import { MatchAddressTypePipe } from '../core/pipes/match-address-type.pipe';

import { VeteranDetailsComponent } from './veteran-details.component';
import { VeteranDetailsModalComponent } from '../veteran-details-modal/veteran-details-modal.component';

let component: VeteranDetailsComponent;
let fixture: ComponentFixture<VeteranDetailsComponent>;
let modalService: NgbModal;

describe('VeteranDetailsComponent', () =>
{
    beforeEach((() =>
    {
        TestBed.configureTestingModule({
            imports: [BrowserModule, FormsModule],
            declarations: [MatchPhoneTypePipe, MatchAddressTypePipe, VeteranDetailsComponent, VeteranDetailsModalComponent, NgbModal, NgbActiveModal],            
            providers: [
                { provide: NgbModal, useValue: modalService } ]
        });
     
        fixture = TestBed.createComponent(VeteranDetailsComponent);
        component = fixture.componentInstance;
    }));  

    it('should be created', async(() => {
    expect(component).toBeTruthy();
    }));

    it('should contain a veteran value', async(() => {
        expect(component.veteran).toBeTruthy();
    }));
    
});