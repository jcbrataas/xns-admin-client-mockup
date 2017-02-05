import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ComponentsListComponent } from './components-list.component';
import { ComponentsListRoutingModule } from './components-list-routing.module';

@NgModule({
  imports: [
    ComponentsListRoutingModule,
    ChartsModule
  ],
  declarations: [ ComponentsListComponent ]
})
export class ComponentsListModule { }
