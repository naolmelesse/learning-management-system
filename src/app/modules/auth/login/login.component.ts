import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AppUi } from 'src/app/services/app-ui/app-ui.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',],
  styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{
  public isSubmitting1: boolean = false;
  public isSubmitting2: boolean = false;
  public forgetPasswordDialogDisplay: boolean = false;

  public loginForm: FormGroup = this._buildForm('loginForm');
  public forgetPasswordForm: FormGroup = this._buildForm('forgetPasswordForm');

  constructor(
    public appUI: AppUi,
    private _formBuilder: FormBuilder,
    private _toastService: MessageService
  ) { }

  ngOnInit(): void {
  }

  private _buildForm(id: string): FormGroup {
    if (id == 'loginForm')
      return this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
      });
    else return this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public formSubmission(formData: FormGroup, formNumber: number): void {
    if (formData.invalid) return;
    
    var obj: any = {};
    for (var c in formData.controls) {
      formData.controls[c].disable();
      obj[c] = formData.controls[c].value;
    }
    console.log(obj);

    formNumber == 1 ? this.isSubmitting1 = true : this.isSubmitting2 = true;

    setTimeout(() => {
      this.isSubmitting1 = false;
      this.isSubmitting2 = false;
      this.forgetPasswordDialogDisplay = false;
      this._toastService.add({ key: 'tst', severity: 'error', sticky: true, summary: 'Validation Failed', detail: 'Invalid User ID or Password' });
      for (var c in formData.controls) {
        formData.controls[c].enable();
      }
    }, 1000);
  }
}
