import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ComponentsListComponent } from './components-list.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsListComponent,
    data: {
      title: 'Components'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsListRoutingModule {}
