import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    products: Product[];

    constructor(private productService: ProductService, private titleService: Title) {
        this.titleService.setTitle('Felix\'\ Products');
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}
