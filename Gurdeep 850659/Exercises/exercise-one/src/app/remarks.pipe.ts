import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remarks'
})
export class RemarksPipe implements PipeTransform {

  transform(value: number): string {
    if(value >= 60){
      return "First Class";
    } else if(value < 60 && value > 35){
      return "Pass";
    } else if(value <= 35){
      return "Fail";
    }
  }
}
