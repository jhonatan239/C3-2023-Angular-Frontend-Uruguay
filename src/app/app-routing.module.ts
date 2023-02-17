import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './account-customer/my-account/my-account.component';
import { ProfileComponent } from './account-customer/profile/profile.component';
import { SinginComponent } from './login/singin/singin.component';
import { SingupComponent } from './login/singup/singup.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import { GuardsGuard } from './login/guards/guards.guard';
import { HomeComponent } from './pages/home/home.component';
import { CustomerComponent } from './administrator/customer/customer.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { NewDepositComponent } from './movements/new-deposit/new-deposit.component';




const routes: Routes = [
  
  { path: '', redirectTo:'/SignIn', pathMatch:"full"}, 

  //{ path: 'Myaccount', component: MyAccountComponent},
  { path: 'SignIn', component: SinginComponent }, 
  { path: 'SignUp', component: SingupComponent}, 
 // { path: 'profile', component: ProfileComponent, canActivate:[GuardsGuard]}, 
  { path: 'ejercicio', component: EjercicioComponent, canActivate:[GuardsGuard]}, 
  { path: 'Home', component: HomeComponent}, 
  //{ path: 'profile', component: CustomerProfileComponent},
  
   
  {path: 'account-customer', 
  loadChildren:()=> import('./account-customer/account-customer.module')
  .then(m => m.AccountCustomerModule)}, //child
  
  {path: 'movements', 
  loadChildren:()=> import('./movements/movements.module')
  .then(m => m.MovementsModule)}, //child

  {path: 'administrator', 
  loadChildren:()=> import('./administrator/administrator.module')
  .then(m => m.AdministratorModule)}, //child


  { path: '**', component: NotfoundComponent}, 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
