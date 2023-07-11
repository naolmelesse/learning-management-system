import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'auth-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  public isVerifying!: boolean;
  public success!: boolean;
  public redirectSeconds: number = 5;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.isVerifying = true;
    this._activatedRoute.params.subscribe((p: any) => {
      setTimeout(() => {
        this.isVerifying = false;
        this.success = true;
        if (this.success)
          this._startRedirectCountDown();
      }, 2000);
    });
  }

  private _startRedirectCountDown(): void {
    setInterval(() => {
      if (this.redirectSeconds > 1)
        this.redirectSeconds--;
      else this._router.navigate(['/auth/login'])
    }, 1000);
  }
}
