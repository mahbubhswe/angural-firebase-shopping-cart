import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppleComponent} from './component/fruits/apple/apple.component';
import {BananaComponent} from './component/fruits/banana/banana.component';
import {MangoComponent} from './component/fruits/mango/mango.component';
import {OrangeComponent} from './component/fruits/orange/orange.component';
import {PineappleComponent} from './component/fruits/pineapple/pineapple.component';
import {DefaultComponent} from './component/fruits/default/default.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {FruitsComponent} from './component/fruits/fruits.component';
import {AddItemComponent} from './component/dashboard/add-item/add-item.component';
import {CartInfoComponent} from './shared/cart-info/cart-info.component';
import {CustomerShippingAddressComponent} from './shared/customer-shipping-address/customer-shipping-address.component';

const routes: Routes = [
  {path: 'payment-system', component: CustomerShippingAddressComponent},
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'add-new-item', component: AddItemComponent},
      {path: '', component: DefaultComponent}
    ]
  },
  {path: '', component: FruitsComponent,
    children: [
      {path: 'your-cart-details', component: CartInfoComponent},
      {path: 'fruit-apple', component: AppleComponent},
      {path: 'fruit-banana', component: BananaComponent},
      {path: 'fruit-mango', component: MangoComponent},
      {path: 'fruit-orange', component: OrangeComponent},
      {path: 'fruit-pineapple', component: PineappleComponent},
      {path: '', component: DefaultComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
