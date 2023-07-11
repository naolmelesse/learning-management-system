import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AppConfig {
    inputStyle: string;
    colorScheme: string;
    theme: string;
    ripple: boolean;
    menuMode: string;
    scale: number;
}

interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    profileSidebarVisible: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive: boolean;
    menuHoverActive: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class AppUi {
    config: AppConfig = {
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'dark',
        theme: 'lara-dark-indigo',
        scale: 14,
    }
    constructor() {
        // if (localStorage.getItem('theme') == 'dark')
        //     this.config = {
        //         ripple: false,
        //         inputStyle: 'outlined',
        //         menuMode: 'static',
        //         colorScheme: 'dark',
        //         theme: 'lara-dark-indigo',
        //         scale: 14,
        //     };
        // else this.config = {
        //     ripple: false,
        //     inputStyle: 'outlined',
        //     menuMode: 'static',
        //     colorScheme: 'light',
        //     theme: 'lara-light-indigo',
        //     scale: 14,
        // };
    }


    state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    };

    private configUpdate = new Subject<AppConfig>();

    private overlayOpen = new Subject<any>();

    configUpdate$ = this.configUpdate.asObservable();

    overlayOpen$ = this.overlayOpen.asObservable();

    onMenuToggle() {
        if (this.isOverlay()) {
            this.state.overlayMenuActive = !this.state.overlayMenuActive;
            if (this.state.overlayMenuActive) {
                this.overlayOpen.next(null);
            }
        }

        if (this.isDesktop()) {
            this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
        }
        else {
            this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

            if (this.state.staticMenuMobileActive) {
                this.overlayOpen.next(null);
            }
        }
    }

    changeFullTheme(theme: string, colorScheme: string) {

        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        var newHref = themeLink.getAttribute('href')!.replace('lara-light-indigo', theme);
        if (!themeLink.getAttribute('href')!.includes(theme)) {
            switch (colorScheme) {
                case 'dark':
                    newHref = themeLink.getAttribute('href')!.replace('lara-light-indigo', theme);
                    break;
                case 'light':
                    newHref = themeLink.getAttribute('href')!.replace('lara-dark-indigo', theme);
                    break;
                default:
                    break;
            }
        }

        this.config.colorScheme
        this.replaceThemeLink(newHref, () => {
            this.config.theme = theme;
            this.config.colorScheme = colorScheme;
            this.onConfigUpdate();
        });
    }

    replaceThemeLink(href: string, onComplete: Function) {
        const id = 'theme-css';
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            themeLink.remove();
            cloneLinkElement.setAttribute('id', id);
            onComplete();
        });
    }

    showProfileSidebar() {
        this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
        if (this.state.profileSidebarVisible) {
            this.overlayOpen.next(null);
        }
    }

    showConfigSidebar() {
        this.state.configSidebarVisible = true;
    }

    isOverlay() {
        return this.config.menuMode === 'overlay';
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return !this.isDesktop();
    }

    onConfigUpdate() {
        this.configUpdate.next(this.config);
    }

}
