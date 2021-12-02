// Libraries
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '',
  component: ListComponent,
  data: { title: 'Repositories' }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
