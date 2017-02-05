import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ComponentsDetailsComponent } from './components-details.component';
import { ComponentsDetailsRoutingModule } from './components-details-routing.module';

@NgModule({
  imports: [
    ComponentsDetailsRoutingModule,
    ChartsModule
  ],
  declarations: [ ComponentsDetailsComponent ]
})
export class ComponentsDetailsModule { }
