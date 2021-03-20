import {Component, OnInit} from '@angular/core';
import {Stockvalueservice} from '../stockvalueservice';


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    providers: [Stockvalueservice],
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    value1: any;

    value2: any;

    value3: any;

    value4: any;

    value5: any;

    value6: any;

    value7: any;

    value8: any;

    value9: any;

    value10: any;

    valueIconLeft: any;

    valueIconRight: any;

    date1: Date;
    dates: Date[];

    rangeDates: Date[];

    minDate: Date;

    maxDate: Date;

    es: any;

    invalidDates: Array<Date>;

    val1: number;
    msg: string;
    checked1 = false;

    selectedValue: any[];
    filteredValue: any[];
    values: any[];
    countries: any[];

    cascadeSelectCountries: any[];

    cities: any[];

    filteredCountries: any[];

    constructor(private StockValueService: Stockvalueservice) {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

    ngOnInit(): void {
      this.StockValueService.getStockValues().then(values => {
        this.values = values;
      });
        this.cascadeSelectCountries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            {cname: 'Sydney', code: 'A-SY'},
                            {cname: 'Newcastle', code: 'A-NE'},
                            {cname: 'Wollongong', code: 'A-WO'}
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            {cname: 'Brisbane', code: 'A-BR'},
                            {cname: 'Townsville', code: 'A-TO'}
                        ]
                    },

                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            {cname: 'Montreal', code: 'C-MO'},
                            {cname: 'Quebec City', code: 'C-QU'}
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            {cname: 'Ottawa', code: 'C-OT'},
                            {cname: 'Toronto', code: 'C-TO'}
                        ]
                    },

                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            {cname: 'Los Angeles', code: 'US-LA'},
                            {cname: 'San Diego', code: 'US-SD'},
                            {cname: 'San Francisco', code: 'US-SF'}
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            {cname: 'Jacksonville', code: 'US-JA'},
                            {cname: 'Miami', code: 'US-MI'},
                            {cname: 'Tampa', code: 'US-TA'},
                            {cname: 'Orlando', code: 'US-OR'}
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            {cname: 'Austin', code: 'US-AU'},
                            {cname: 'Dallas', code: 'US-DA'},
                            {cname: 'Houston', code: 'US-HO'}
                        ]
                    }
                ]
            }
        ];
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
}

