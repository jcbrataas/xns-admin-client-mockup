import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { UnitsComponent } from './units.component';
import { UnitsRoutingModule } from './units-routing.module';

@NgModule({
  imports: [
    UnitsRoutingModule,
    ChartsModule
  ],
  declarations: [ UnitsComponent ]
})
export class UnitsModule { }
