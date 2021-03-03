import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';
import { ProductService } from './productservice';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import { NavbarComponent } from './navbar/navbar.component';


import {RouterModule} from '@angular/router';

import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import {CalendarModule} from 'primeng/calendar';
import {InputSwitchModule} from 'primeng/inputswitch';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { TabViewModule } from 'primeng/tabview';
import { OverviewComponent } from './overview/overview.component';


import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    RouterModule,
    TabMenuModule,
    CalendarModule,
    InputSwitchModule,
    AutoCompleteModule,
    TabViewModule,
    PanelModule,
    InputTextModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    CascadeSelectModule,
    ChartModule
  ],
  declarations: [AppComponent, NavbarComponent, CreateComponent, DetailsComponent, OverviewComponent, OverviewComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})

export class AppModule { }
