import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const admin = inject(AdminService);
  if (admin.isAuthenticated()) {
  return true;
  }
  else {
  router.navigate(['/login']);
  return false;
  }
};
