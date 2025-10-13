import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SvgIconComponent } from '../../icons/svg-icon.component';
import { NavbarMobileComponent } from '../navbar-mobile/navbar-mobile.component';
import { APP_SHARED_INFO } from '../../../core/config/app-info';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, SvgIconComponent, NavbarMobileComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isMenuOpen = signal(false);
  public isAnimating = signal(false);
  readonly telefono = APP_SHARED_INFO.contact.phone;

  toggleMenu() {
    if (!this.isAnimating()) {
      this.isAnimating.set(true);
    }
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
