import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ComponentsDetailsComponent } from './components-details.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsDetailsComponent,
    data: {
      title: 'Component Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsDetailsRoutingModule {}
