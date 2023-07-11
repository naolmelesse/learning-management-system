import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppUi } from './services/app-ui/app-ui.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    config = {
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14,
    };

    constructor(
        private _primengConfig: PrimeNGConfig,
        private _appUI: AppUi
    ) { }

    ngOnInit() {
        this._primengConfig.ripple = true;
        if (localStorage.getItem('theme') == 'dark')
            this._appUI.changeFullTheme('lara-dark-indigo', 'dark');
        else
            this._appUI.changeFullTheme('lara-light-indigo', 'light');
    }
}
