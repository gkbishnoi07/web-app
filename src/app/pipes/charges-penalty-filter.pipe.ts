import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chargesPenaltyFilter',
  standalone: false
})
export class ChargesPenaltyFilterPipe implements PipeTransform {
  transform(charges: any, penalty: boolean): any {
    if (charges) {
      charges = charges.filter((charge: any) => {
        if (charge.penalty === penalty) {
          return true;
        }
        return false;
      });
    }
    return charges;
  }
}
