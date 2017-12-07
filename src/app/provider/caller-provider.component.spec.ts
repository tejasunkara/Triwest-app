import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CallerProviderComponent } from './caller-provider.component';
import { ProviderService } from './caller-provider.service';
import { CallerProviderSearchComponent } from './caller-provider-search.component';

describe('CallerProviderComponent', () => {
    let component: CallerProviderComponent;
    let fixture: ComponentFixture<CallerProviderComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, FormsModule],
            declarations: [CallerProviderComponent, CallerProviderSearchComponent], // declare the test component
            providers: [ProviderService],
            schemas: [NO_ERRORS_SCHEMA]

        });

        fixture = TestBed.createComponent(CallerProviderComponent);

        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h5'));
        el = de.nativeElement;

        fixture.detectChanges();
    });

    it('should create caller-provider component', () => {
        expect(component).toBeTruthy();
    });

    it('should display heading `Validate Provider User`', async(() => {
        let title = el.innerHTML;
        expect(title).toContain('Validate Provider User');
    }));

});
