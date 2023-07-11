import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppUi } from 'src/app/services/app-ui/app-ui.service';

@Component({
    selector: 'dashboard-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    menuItems: MenuItem[] = [];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public appUI: AppUi) { }

    ngOnInit(): void {
        this.menuItems = [
            {
                label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: './profile'
            },
            {
                label: 'Log Out', icon: 'pi pi-fw pi-sign-out', routerLink: '/auth/login'
            }
        ];
        if (localStorage.getItem('theme') == 'dark')
            (document.getElementById('themeCheckBox') as HTMLInputElement).checked = true;
        else
            (document.getElementById('themeCheckBox') as HTMLInputElement).checked = false;
    }

    public changeTheme(e: any): void {
        console.log('ehre');

        if (localStorage.getItem('theme') == 'light') {
            this.appUI.changeFullTheme('lara-dark-indigo', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            this.appUI.changeFullTheme('lara-light-indigo', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

}

