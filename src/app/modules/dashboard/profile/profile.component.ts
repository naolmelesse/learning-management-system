import { Component, OnInit } from '@angular/core';
import { Talent } from 'src/assets/interfaces';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';


@Component({
  selector: 'dashboard-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  talentData!:Talent[];

  constructor(
    private _httpService: HttpService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this._httpService.talentDetails.subscribe({
      next: (data: Talent[]) => this.talentData = data,
      error: (err) => console.log(err),
      complete: () => console.log('call done')
    });
    // console.log(this.talentData)
  }

}
