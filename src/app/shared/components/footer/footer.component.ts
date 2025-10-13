import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_SHARED_INFO } from '../../../core/config/app-info';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly navItems = APP_SHARED_INFO.navItems;
  readonly razonSocial = APP_SHARED_INFO.razonSocial;
  readonly nit = APP_SHARED_INFO.nit;
  readonly ubicacion = APP_SHARED_INFO.contact.location;
  readonly telefono = APP_SHARED_INFO.contact.phoneString;
}
