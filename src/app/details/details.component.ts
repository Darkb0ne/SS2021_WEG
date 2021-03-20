import {Component, OnInit} from '@angular/core';
import {ProductService} from '../productservice';
import {Product} from '../product';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    data: any;
    private routeSubscription?: Subscription;
    public products?: Product[];
    public product?: Product;

    constructor(private route: ActivatedRoute, private productService: ProductService) {
        this.data = {
            labels: ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'],
            datasets: [
                {
                    data: [6, 3, 1],
                    backgroundColor: [
                        '#36A2EB',
                        '#FFCE56',
                        '#FF6384'
                    ],
                    hoverBackgroundColor: [
                        '#36A2EB',
                        '#FFCE56',
                        '#FF6384'
                    ]
                }]
        };
    }

    // tslint:disable-next-line:use-life-cycle-interface
    public ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => {
            const productId = +params.id;
            console.log(productId);
            // tslint:disable-next-line:triple-equals
            this.productService.getProductsSmall().then(data => this.product = data.find(product => product.id == productId));
        });
    }
            // tslint:disable-next-line:triple-equals
        // this.productService.getProductsSmall().then(data => this.products.push(data.find(product => product.id == 1001)));
        // tslint:disable-next-line:triple-equals
        /*
            this.routeSubscription = this.route.params.subscribe(params => {+++
              const toDoId = +params.id;
              //this.product = this.productService.find(id);
            });
          }
        */
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy(): void {
        this.routeSubscription?.unsubscribe();
    }
}
