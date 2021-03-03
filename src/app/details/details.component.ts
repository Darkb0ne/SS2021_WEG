import { Component, OnInit } from '@angular/core';
import {ProductService} from '../productservice';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{
  data: any;

  constructor() {
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


}
