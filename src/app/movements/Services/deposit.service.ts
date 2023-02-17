import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepositModel } from 'src/app/interfaces/deposit.interface';
import { AuthService } from '../../login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  private api= environment.api
  
  constructor(private http: HttpClient, private auth: AuthService) { }

  public addDeposit(deposit : DepositModel ): Observable<DepositModel> {
    return this.http.post<DepositModel>(this.api +"/deposit/register", deposit);
  }
  
  findDepositByCustmoer(): Observable<DepositModel[]>{
    return this.http.get<DepositModel[]>(this.api + "/deposit/history/" + this.auth.currentUser.id  )
}

}
