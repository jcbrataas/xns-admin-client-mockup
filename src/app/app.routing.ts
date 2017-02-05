import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: './Home/home.module#HomeModule'
      },
      {
        path: 'units',
        loadChildren: './units/units.module#UnitsModule'
      },
      {
        path: 'components-list',
        loadChildren: './components/components-list.module#ComponentsListModule'
      },
      {
        path: 'components-details',
        loadChildren: './components/components-details.module#ComponentsDetailsModule'
      },      
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
