import { NgModule } from '@angular/core';
import { RouterModule } from '../../../node_modules/@angular/router';
import { pagesRoutes } from './pages.routes';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  providers: [],
})
export class PagesModule {

  // public static routes = pagesRoutes;
 }
