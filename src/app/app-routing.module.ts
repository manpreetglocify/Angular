import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { DefaultLayoutComponent }       from './layouts/default/default.component';
import { ExtraLayoutComponent }         from './layouts/extra/extra.component';

import { PageDashboardComponent }       from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent }        from './pages/not-found/not-found.component';
import { CustomerListComponent } from './pages/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './pages/customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './pages/customer/customer-edit/customer-edit.component';


const defaultRoutes: Routes = [
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'customer/list', component: CustomerListComponent },
  { path: 'customer/add', component: CustomerAddComponent },
  { path: 'customer/:id/edit', component: CustomerEditComponent },
  { path: 'notfound', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/default-layout/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'default-layout',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  },
  {
    path: '**',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
