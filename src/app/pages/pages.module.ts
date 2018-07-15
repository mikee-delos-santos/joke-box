import { NgModule } from '@angular/core';
import { RouterModule } from '../../../node_modules/@angular/router';
import { pagesRoutes } from './pages.routes';
import { HomeComponent } from './home/home.component';
import { JokeBoxComponent } from './joke-box/joke-box.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../environments/environment.prod';
import { JokeService } from '../services/joke.service';
import { LocalStorageService } from '../services/local-storage.service';
 

@NgModule({
  declarations: [
    HomeComponent,
    JokeBoxComponent
  ],
  imports: [
    RouterModule.forChild(pagesRoutes),
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    JokeService,
    LocalStorageService
  ],
})
export class PagesModule {
}
