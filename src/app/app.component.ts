import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  // cambio metodo title por q podio crear metodo
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
constructor (
private serviceCom: AuthService

){


}

  status: boolean = false

  ngOnInit(): void {
    this.serviceCom.statusVariable.subscribe(statusValue => this.status = statusValue);
 
 
  }
 
}

