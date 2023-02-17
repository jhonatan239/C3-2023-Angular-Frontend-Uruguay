import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDepositComponent } from './new-deposit/new-deposit.component';
import { NewTransaccionComponent } from './new-transaccion/new-transaccion.component';
import { ViewTransferComponent } from './view-transfer/view-transfer.component';
import { MovementsRouteModule } from './movements-routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewDepositComponent,
    NewTransaccionComponent,
    ViewTransferComponent
  ],
  imports: [
    CommonModule,
    MovementsRouteModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class MovementsModule { }
