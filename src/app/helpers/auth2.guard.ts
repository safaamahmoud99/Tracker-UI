import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
 import { AuthService } from 'src/Shared/Services/auth.service';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard2 implements CanActivate {
  constructor(private authService: AuthService,private router : Router,private messageService: MessageService)
  {}
   canActivate():boolean
   {
     if(this.authService.IsSuperAdmin())
     {
       return true;
     }
     else if (this.authService.IsAdmin())
     {
      return true;
     }
     else if(this.authService.IsPMO()) 
     {
     return true;
     }  
     else
     {
      // window.alert('Access Denied, Login is Required to Access This Page!')
      this.router.navigate(['']);
       return false;
     }
   }
}