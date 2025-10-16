import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ICON_PATHS } from '../../../../shared/icons/icon-paths';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';

@Component({
  selector: 'app-services-card',
  imports: [SvgIconComponent],
  templateUrl: './services-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesCardComponent {
  icon = input<keyof typeof ICON_PATHS>('error');
  title = input<string>('Title');
  description = input<string>('Description');
}
