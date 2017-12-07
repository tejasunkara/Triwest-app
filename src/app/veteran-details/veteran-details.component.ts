import { Component, Input } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { VeteranDetailsModalComponent } from '../veteran-details-modal/veteran-details-modal.component';
import { VeteranProfile } from '../model/veteran-360.model';
import { DatePipe } from '@angular/common';
import { Veteran360Service } from './veteran360.service';

@Component({
    selector: 'veteran-details',
    templateUrl: './veteran-details.component.html',
    providers: [Veteran360Service]
})

export class VeteranDetailsComponent {
    errorMessage: string;
    veteran: VeteranProfile; 

    constructor(private veteran360Service: Veteran360Service,
        private modalService: NgbModal) { }

    ngOnInit(): void {             
        this.veteran360Service.getVeteranDetailsById(1)
        .subscribe(
        value => this.veteran = value,
        error => this.errorMessage = <any>error);
    }
    
    moreDetails(veteran) {
        const modalRef = this.modalService.open(VeteranDetailsModalComponent, { size: 'lg' });
        modalRef.componentInstance.veteran = this.veteran;
    }
}