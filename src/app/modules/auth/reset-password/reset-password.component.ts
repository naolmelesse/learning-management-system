import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppUi } from 'src/app/services/app-ui/app-ui.service';

@Component({
  selector: 'auth-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class ResetPasswordComponent implements OnInit {
  public isSubmitting: boolean = false;

  private token!: string;

  public passwordResetForm: FormGroup = this._buildForm('passwordResetForm');
  public forgetPasswordForm: FormGroup = this._buildForm('forgetPasswordForm');

  constructor(
    public appUI: AppUi,
    private _formBuilder: FormBuilder,
    private _toastService: MessageService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((p: any) => {
      this.token = p.token;
    });
    console.log(this.token);
  }

  private _buildForm(id: string): FormGroup {
    if (id == 'passwordResetForm')
      return this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
      });
    else return this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public formSubmission(formData: FormGroup): void {
    if (formData.invalid) return;
    if (this.passwordResetForm.get('password')?.value !== this.passwordResetForm.get('confirmPassword')?.value) {
      this.passwordResetForm.get('confirmPassword')?.setErrors({ passwordMatch: false });
      return;
    }
    var obj: any = {};
    this.isSubmitting = true;
    for (var c in formData.controls) {
      formData.controls[c].disable();
      if (c !== 'confirmPassword')
        obj[c] = formData.controls[c].value;
    }
    obj.token = this.token;
    console.log(obj);

    setTimeout(() => {
      this.isSubmitting = false;
      this._toastService.add({ key: 'tst', severity: 'error', sticky: true, summary: 'Validation Failed', detail: 'Invalid User ID or Password' });
      this._toastService.add({ key: 'tst', severity: 'success', sticky: true, summary: 'Password Reset', detail: 'Successfully reseted the password' });
      this._router.navigate(['/auth/login']);
    }, 1000);
  }
}
