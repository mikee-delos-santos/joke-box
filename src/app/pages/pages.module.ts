import { NgModule } from '@angular/core';
import { RouterModule } from '../../../node_modules/@angular/router';
import { pagesRoutes } from './pages.routes';
import { HomeComponent } from './home/home.component';
import { JokeBoxComponent } from './joke-box/joke-box.component';
import { CommonModule } from '../../../node_modules/@angular/common';


@NgModule({
  declarations: [
    HomeComponent,
    JokeBoxComponent
  ],
  imports: [
    RouterModule.forChild(pagesRoutes),
    CommonModule
  ],
  providers: [],
})
export class PagesModule {

  // public static routes = pagesRoutes;
 }
