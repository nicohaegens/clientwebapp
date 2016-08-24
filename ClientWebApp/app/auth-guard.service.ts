import { Injectable }             from '@angular/core';
import { CanActivate, Router,
    ActivatedRouteSnapshot,
    NavigationExtras,
    RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isLoggedIn) { return true; }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = state.url;
        let sessionId = 123456789;
        let navigationExtras: NavigationExtras = {
            queryParams: { "session_id": sessionId },
            fragment: "anchor"
        };
        // Navigate to the login page
        this.router.navigate(["/login"], navigationExtras);
        return false;
    }
}