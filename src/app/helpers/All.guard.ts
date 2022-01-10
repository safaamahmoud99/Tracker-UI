import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
 import { AuthService } from 'src/Shared/Services/auth.service';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class all implements CanActivate {
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
     else if (this.authService.IsPMO() || this.authService.IsPM()) 
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