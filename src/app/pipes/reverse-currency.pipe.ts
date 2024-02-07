import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverseCurrency'
})

export class ReverseCurrencyPipe implements PipeTransform {
  public transform(value: number, currencyCode: string): string {
    return  value + ' ' + currencyCode;
  }
}
