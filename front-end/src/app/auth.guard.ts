import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private localStore: LocalService) {}

  canActivate(): boolean {
    const token = this.localStore.getData('accessToken');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
