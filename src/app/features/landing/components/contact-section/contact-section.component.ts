import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_SHARED_INFO } from '../../../../core/config/app-info';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';

@Component({
  selector: 'app-contact-section',
  imports: [SvgIconComponent],
  templateUrl: './contact-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  readonly email = APP_SHARED_INFO.contact.email;
  readonly ubicacion = APP_SHARED_INFO.contact.location;
  readonly telefono = APP_SHARED_INFO.contact.phoneString;
  readonly whatsapp = APP_SHARED_INFO.contact.phone;
}
