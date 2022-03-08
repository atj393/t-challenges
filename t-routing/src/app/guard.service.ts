import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {

  constructor(private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot) {
    if (!!localStorage.getItem("token")) {
      if (route.routeConfig?.path == 'login') {
        this.router.navigate(['/dashboard']);
      }
      return true;
    }
    if (route.routeConfig?.path != 'login') {
      this.router.navigate(['/login']);
    }
    return true;
  }
}