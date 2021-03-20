import {Component, OnInit} from '@angular/core';
import {Stockvalueservice} from '../stockvalueservice';
import {Product} from '../product';
import {ProductService} from '../productservice';


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    providers: [Stockvalueservice, ProductService],
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    categories: any[];
    dates: Date[];
    minDate: Date;
    maxDate: Date;

    invalidDates: Array<Date>;

    msg: string;
    filteredValue: any[];
    values: any[];
    product: Product;
    constructor(private StockValueService: Stockvalueservice, private ProductRepoService: ProductService) {
        this.categories = [
            {name: '', code: ''},
            {name: 'Accessories', code: 'AC'},
            {name: 'Fitness', code: 'FIT'},
            {name: 'Clothing', code: 'CLO'},
            {name: 'Electronics', code: 'ELE'}
        ];
        this.product = {
            id: null};
    }


    ngOnInit(): void {
      this.StockValueService.getStockValues().then(values => {
        this.values = values;
      });
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        const prevMonth = (month === 0) ? 11 : month - 1;
        const prevYear = (prevMonth === 11) ? year - 1 : year;
        const nextMonth = (month === 11) ? 0 : month + 1;
        const nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        const invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today, invalidDate];

    }

    filterValue(event) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.values.length; i++) {
            const country = this.values[i];
            // tslint:disable-next-line:triple-equals
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        this.filteredValue = filtered;
    }

    onSubmit() {
        this.ProductRepoService.addProduct(this.product);
    }
}

