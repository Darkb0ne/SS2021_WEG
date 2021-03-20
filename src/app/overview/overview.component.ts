import {Component} from '@angular/core';
import { ProductService } from '../productservice';
import { Product } from '../product';
import {Title} from '@angular/platform-browser';
import {tryCatch} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  products: Product[];

  constructor(private productService: ProductService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    console.log(this.products = this.productService.getProducts());
    // const test = this.products.filter(obj => {
    //  return obj.id === '1001';
    // });
  }
}
