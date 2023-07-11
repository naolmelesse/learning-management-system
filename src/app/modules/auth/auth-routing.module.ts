import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UnauthorizedAccessComponent } from './unauthorized-access/unauthorized-access.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'access-denied',
            component: UnauthorizedAccessComponent,
            title: 'Access Denied'
        },
        {
            path: 'login',
            component: LoginComponent,
            title: 'LMS | Login'
        },
        {
            path: 'sign-up',
            component: SignUpComponent,
            title: 'LMS | Sign Up'

        },
        {
            path: 'approval-acknowledgement',
            component: UnauthorizedAccessComponent,
            title: 'LMS | Approval Acknowledgement'

        },
        {
            path: 'email-verification/:token',
            component: EmailVerificationComponent,
            title: 'LMS | Email Verification'

        },
        {
            path: 'reset-password/:token',
            component: ResetPasswordComponent,
            title: 'LMS | Password Reset'
        },
        {
            path: '**',
            redirectTo: '/notfound'
        }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
