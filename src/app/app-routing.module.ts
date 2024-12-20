import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BettermanComponent } from './betterman/betterman.component';
import { AppComponent } from './app.component';

const routes: Routes = [ 
  // {path:'',component:AppComponent},
  {path:'dashboard',  component : DashboardComponent,
    children
    :[
      { path: 'betterman', component: BettermanComponent },
    ],
  },
  // {
  //   path:'**',
  //   redirectTo:'',
  //   pathMatch:'full'
  // }
];
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
