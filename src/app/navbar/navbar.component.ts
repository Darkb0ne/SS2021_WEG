import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    items: MenuItem[];

    activeItem: MenuItem;

    ngOnInit(): void {
        this.items = [
            {label: 'Overview', icon: 'pi pi-fw pi-list'},
            {label: 'New', icon: 'pi pi-fw pi-plus'},
            {label: 'Details', icon: 'pi pi-fw pi-info-circle'},
        ];

        this.activeItem = this.items[0];
    }


}
