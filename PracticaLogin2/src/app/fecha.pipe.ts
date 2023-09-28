import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    if(!value){
      return '';
    }

    const current = new Date();
    const diff = current.getTime() - value.getTime();

    const seconds= Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);


    if(days > 0 ){
      return `hace ${days}  días` ;
    }
    if(hours > 0){
      return `hace ${hours}  hours` ;
    }
    if(minutes > 0){
      return `hace ${minutes}  minutes` ;
    }
    if(seconds > 0){
      return `hace ${seconds}  seconds` ;
    }
    return 'justo ahora';

  }
}
