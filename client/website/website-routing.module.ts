// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { WebsiteComponent }   from './website.component';
import { HomeComponent }      from './home/home.component';
import { AboutComponent }     from './about/about.component';
import { ServicesComponent }  from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent }   from './contact/contact.component';

// Shared
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



// Route Configuration
export const routes: Routes = [{
  path: '',
  component: WebsiteComponent,
  children: [
    {
      path: '',
      children: [{
        path: '',
        component: HomeComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      }]
    },
    {
      path: 'about',
      children: [
        {
          path: '',
          component: HeaderComponent,
          outlet: 'Header',
        }, {
          path: '',
          component: AboutComponent
        }, {
          path: '',
          component: FooterComponent,
          outlet: 'Footer',
        }]
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            component: HeaderComponent,
            outlet: 'Header',
          }, {
            path: '',
            component: ServicesComponent
          }, {
            path: '',
            component: FooterComponent,
            outlet: 'Footer',
          }]
      },
      {
        path: 'portfolio',
        children: [
          {
            path: '',
            component: HeaderComponent,
            outlet: 'Header',
          }, {
            path: '',
            component: PortfolioComponent
          }, {
            path: '',
            component: FooterComponent,
            outlet: 'Footer',
          }]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            component: HeaderComponent,
            outlet: 'Header',
          }, {
            path: '',
            component: ContactComponent
          }, {
            path: '',
            component: FooterComponent,
            outlet: 'Footer',
          }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebsiteRoutingModule {}
