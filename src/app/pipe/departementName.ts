import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departementName'
})
export class departementName implements PipeTransform {

  transform(name:string): any {
    return "departement name: "+name;
  }

}
