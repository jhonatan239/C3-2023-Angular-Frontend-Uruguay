
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDepositComponent } from './movements/new-deposit/new-deposit.component';
import { NewTransaccionComponent } from './movements/new-transaccion/new-transaccion.component';
import { ViewTransferComponent } from './movements/view-transfer/view-transfer.component';
import { AuthService } from './login/services/auth.service';
import { AccountService } from './administrator/services/account.service';
import { CustomerService } from './administrator/services/customer.service';
import { DepositService } from './administrator/services/deposit.service';
import { TransferService } from './administrator/services/transfer.service';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import {HttpClientModule} from  '@angular/common/http'
//import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environment/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login-module.module';





@NgModule({
  declarations: [
    AppComponent,
    //NewDepositComponent,
  //  NewTransaccionComponent,
    ViewTransferComponent,
    EjercicioComponent,
   //HomeComponent,
   //CustomerComponent,
   //CustomerProfileComponent,
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
   HttpClientModule,
   LoginModule,
    //FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())

  ],
  providers: [AuthService, AccountService, CustomerService, DepositService, DepositService, TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
