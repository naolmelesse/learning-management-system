import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DialogModule } from 'primeng/dialog';
import { UnauthorizedAccessComponent } from './unauthorized-access/unauthorized-access.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { ShowSecondsPipe } from 'src/app/pipes/show-seconds/show-seconds.pipe';

@NgModule({

    declarations: [
        LoginComponent,
        SignUpComponent,
        ResetPasswordComponent,
        UnauthorizedAccessComponent,
        EmailVerificationComponent,
        ShowSecondsPipe
    ],

    imports: [
        CommonModule,
        AuthRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        ReactiveFormsModule,
        DialogModule        
    ],
    providers: [ShowSecondsPipe]
})
export class AuthModule { }
