import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component404 } from './components/component404/component404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PublicComponent } from './components/public/public.component';
import { GuardService } from './guard.service';

const routes: Routes = [
  { path: 'public', component: PublicComponent, pathMatch: 'full', data: { title: 'Public' } },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [GuardService], data: { title: 'Dashboard', requiresLogin: true } },
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [GuardService], data: { title: 'Login' } },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: '**', component: Component404, data: { title: 'Page Not Found' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
