// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ListComponent
  ],
})
export class PagesModule { }
