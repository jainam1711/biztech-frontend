import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
}, {
  path: '**',
  component: NotfoundComponent,
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
