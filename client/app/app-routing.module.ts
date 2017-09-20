import { NgModule } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

// COMPONENTS
import { NotFoundComponent }  from '../shared/components/not-found/not-found.component';

// IMPORT ROUTES
export const routes: Routes = [
  {
    path: '',
    loadChildren: './../website/website.module#WebsiteModule'
  },
  {
   path: '404',
   component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
