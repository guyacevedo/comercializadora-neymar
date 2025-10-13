import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../../icons/svg-icon.component';
import { APP_SHARED_INFO } from '../../../core/config/app-info';

@Component({
  selector: 'app-navbar-mobile',
  imports: [RouterLink, SvgIconComponent],
  templateUrl: './navbar-mobile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMobileComponent {
  public isMenuOpen = input(false);
  readonly navItems = APP_SHARED_INFO.navItems;
  readonly telefono = APP_SHARED_INFO.contact.phone;
}
