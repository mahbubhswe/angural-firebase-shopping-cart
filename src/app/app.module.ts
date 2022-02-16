import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialDesignModule} from './material-design/material-design.module';
import { AppleComponent } from './component/fruits/apple/apple.component';
import { OrangeComponent } from './component/fruits/orange/orange.component';
import { BananaComponent } from './component/fruits/banana/banana.component';
import { MangoComponent } from './component/fruits/mango/mango.component';
import { PineappleComponent } from './component/fruits/pineapple/pineapple.component';
import { DefaultComponent } from './component/fruits/default/default.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddItemComponent } from './component/dashboard/add-item/add-item.component';
import { FruitsComponent } from './component/fruits/fruits.component';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { CartInfoComponent } from './shared/cart-info/cart-info.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {GooglePayButtonModule} from '@google-pay/button-angular';
import { CustomerShippingAddressComponent } from './shared/customer-shipping-address/customer-shipping-address.component';
import {Ng2TelInputModule} from 'ng2-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    OrangeComponent,
    BananaComponent,
    MangoComponent,
    PineappleComponent,
    DefaultComponent,
    DashboardComponent,
    AddItemComponent,
    FruitsComponent,
    CartInfoComponent,
    CustomerShippingAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    GooglePayButtonModule,
    Ng2TelInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
