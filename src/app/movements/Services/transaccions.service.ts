import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { TransferModel } from '../../interfaces/transfer.interface';

@Injectable({
  providedIn: 'root'
})
export class TransaccionsService {
  private api= environment.api
  constructor(private http: HttpClient) { }


  public addTransfer(transfer : TransferModel ): Observable<TransferModel> {
    return this.http.post<TransferModel>(this.api +"/transfer/register", transfer);
  }

}
