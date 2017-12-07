import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'caller-provider-search',    
    templateUrl: 'caller-provider-search.component.html' 
    
})
export class CallerProviderSearchComponent implements OnChanges {
    @Input() data: Array<any>;
    gridData: any;

    selected = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;    

    constructor() { }

    ngOnInit() {               
    }  

    ngOnChanges(changes: SimpleChanges) {
        var searchResults: Array<any> = changes.data.currentValue;
        
        if (searchResults)
        {
            this.gridData = searchResults
        }        
    }

    onSelect({ selected })
    {
        console.log("selected" + this.selected);
    }
}
