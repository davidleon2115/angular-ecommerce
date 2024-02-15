import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent,
},
{
  path: '', 
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'cart',
  component: CartComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
