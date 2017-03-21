/**
 * @ProductRow: A Component for the view of single Product
 */
import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  inputs: ['product'],
  host: {'class': 'item'}
})
export class ProductRowComponent {
  product: Product;
}
