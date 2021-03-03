import {Component} from '@angular/core';
import { ProductService } from '../productservice';
import { Product } from '../product';
import {Title} from '@angular/platform-browser';

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
    this.productService.getProductsSmall().then(data => this.products = data);
  }
}
