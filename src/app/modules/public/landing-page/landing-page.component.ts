import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppUi } from 'src/app/services/app-ui/app-ui.service';

@Component({
  selector: 'public-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(public appUI: AppUi, public router: Router) { }

}
