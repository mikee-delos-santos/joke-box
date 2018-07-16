import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
  constructor(
    private activateRoute: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {
    activateRoute.queryParams.subscribe( v => {
      if(v.reset) {
        localStorage.reset();
      }
    });
  }
}