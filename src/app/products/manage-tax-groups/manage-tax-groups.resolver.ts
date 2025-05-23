/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';

/**
 * Manage Tax Groups data resolver.
 */
@Injectable()
export class ManageTaxGroupsResolver implements Resolve<Object> {
  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productsService: ProductsService) {}

  /**
   * Returns the tax groups data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.productsService.getTaxGroups();
  }
}
