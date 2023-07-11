import { Component, ElementRef, OnInit } from '@angular/core';
import { AppUi } from 'src/app/services/app-ui/app-ui.service';

@Component({
  selector: 'dashboard-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  model: any[] = [];

  constructor(public appUI: AppUi, public el: ElementRef) { }

  ngOnInit() {
    this.model = [
      {
        items: [
          { label: 'Home', icon: 'pi pi-home', routerLink: ['/dashboard/home'] },
          { label: 'My Programs', icon: 'pi pi-book', routerLink: ['/dashboard/my-programs'] },
          { label: 'My Grades', icon: 'pi pi-book', routerLink: ['/dashboard/my-grades'] },
          // { label: 'My Grades / p1', icon: 'pi pi-book', routerLink: ['/dashboard/my-grades/p1'] }
          { label: 'Program Publication', icon: 'pi pi-arrow-circle-up', routerLink: ['/dashboard/program-publication'] },
          { label: 'Program Activation', icon: 'pi pi-history', routerLink: ['/dashboard/program-activation'] },
          { label: 'Talent Evaluation', icon: 'pi pi-check-square', routerLink: ['/dashboard/talent-evaluation'] },
          // { label: 'Talent Evaluation/ id', icon: 'pi pi-book', routerLink: ['/dashboard/talent-evaluation/p1'] },
          { label: 'All Talents', icon: 'pi pi-users', routerLink: ['/dashboard/all-talents'] },
          // { label: 'All Talents/ view', icon: 'pi pi-book', routerLink: ['/dashboard/all-talents/view/s1'] },
          // { label: 'All Talents/ edit', icon: 'pi pi-book', routerLink: ['/dashboard/all-talents/edit/s2'] },
          { label: 'All Trainers', icon: 'pi pi-users', routerLink: ['/dashboard/all-trainers'] },
          // { label: 'All Trainers/ view', icon: 'pi pi-book', routerLink: ['/dashboard/all-trainers/view/t1'] },
          // { label: 'All Trainers/ edit', icon: 'pi pi-book', routerLink: ['/dashboard/all-trainers/edit/t2'] },
          { label: 'All Programs', icon: 'pi pi-database', routerLink: ['/dashboard/all-programs'] },
          // { label: 'All Programs/ edit', icon: 'pi pi-book', routerLink: ['/dashboard/all-programs/edit/p2'] },
          { label: 'Enrollment Approvals', icon: 'pi pi-file-import', routerLink: ['/dashboard/enrollment-approvals'] },
          { label: 'Talent Approvals', icon: 'pi pi-sign-in', routerLink: ['/dashboard/talent-approvals'] },
          { label: 'Add Program', icon: 'pi pi-plus-circle', routerLink: ['/dashboard/add-program'] },
          { label: 'Add Trainer', icon: 'pi pi-user-plus', routerLink: ['/dashboard/add-trainer'] },
          { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/dashboard/settings'] },
          { label: 'Role Management', icon: 'pi pi-lock', routerLink: ['/dashboard/role-assignment'] },
          { label: 'Role Assignment', icon: 'pi pi-send', routerLink: ['/dashboard/role-management'] }
        ]
      }
    ];
  }
}