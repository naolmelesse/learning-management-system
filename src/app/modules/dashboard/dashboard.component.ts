import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AppUi } from 'src/app/services/app-ui/app-ui.service';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

    overlayMenuOpenSubscription: Subscription;

    menuOutsideClickListener: any;

    profileMenuOutsideClickListener: any;

    @ViewChild(SidenavComponent) sidenav!: SidenavComponent;

    @ViewChild(HeaderComponent) header!: HeaderComponent;

    constructor(public appUI: AppUi, public renderer: Renderer2, public router: Router) {
        this.overlayMenuOpenSubscription = this.appUI.overlayOpen$.subscribe(() => {
            if (!this.menuOutsideClickListener) {
                this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(this.sidenav.el.nativeElement.isSameNode(event.target) || this.sidenav.el.nativeElement.contains(event.target) 
                        || this.header.menuButton.nativeElement.isSameNode(event.target) || this.header.menuButton.nativeElement.contains(event.target));
                    
                    if (isOutsideClicked) {
                        this.hideMenu();
                    }
                });
            }

            if (!this.profileMenuOutsideClickListener) {
                this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(this.header.menu.nativeElement.isSameNode(event.target) || this.header.menu.nativeElement.contains(event.target)
                        || this.header.topbarMenuButton.nativeElement.isSameNode(event.target) || this.header.topbarMenuButton.nativeElement.contains(event.target));

                    if (isOutsideClicked) {
                        this.hideProfileMenu();
                    }
                });
            }

            if (this.appUI.state.staticMenuMobileActive) {
                this.blockBodyScroll();
            }
        });

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.hideMenu();
                this.hideProfileMenu();
            });
    }

    hideMenu() {
        this.appUI.state.overlayMenuActive = false;
        this.appUI.state.staticMenuMobileActive = false;
        this.appUI.state.menuHoverActive = false;
        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
            this.menuOutsideClickListener = null;
        }
        this.unblockBodyScroll();
    }

    hideProfileMenu() {
        this.appUI.state.profileSidebarVisible = false;
        if (this.profileMenuOutsideClickListener) {
            this.profileMenuOutsideClickListener();
            this.profileMenuOutsideClickListener = null;
        }
    }

    blockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        }
        else {
            document.body.className += ' blocked-scroll';
        }
    }

    unblockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        }
        else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    get containerClass() {
        return {
            'layout-theme-light': this.appUI.config.colorScheme === 'light',
            'layout-theme-dark': this.appUI.config.colorScheme === 'dark',
            'layout-overlay': this.appUI.config.menuMode === 'overlay',
            'layout-static': this.appUI.config.menuMode === 'static',
            'layout-static-inactive': this.appUI.state.staticMenuDesktopInactive && this.appUI.config.menuMode === 'static',
            'layout-overlay-active': this.appUI.state.overlayMenuActive,
            'layout-mobile-active': this.appUI.state.staticMenuMobileActive,
            'p-input-filled': this.appUI.config.inputStyle === 'filled',
            'p-ripple-disabled': !this.appUI.config.ripple
        }
    }

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }
}
