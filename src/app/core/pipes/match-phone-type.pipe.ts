import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'matchPhoneType'
})
export class MatchPhoneTypePipe implements PipeTransform {
    transform(items: Array<any>, type: string): Array<any> {       
        console.log('phone type to match: ' + type);
        return items.filter(item => item.phonetype === type);
    }
}