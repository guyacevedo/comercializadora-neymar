import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICON_PATHS } from '../../../../shared/icons/icon-paths';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';

export interface AdvantageItem {
  icon: keyof typeof ICON_PATHS;
  description: string;
}

@Component({
  selector: 'app-advantages-section',
  imports: [SvgIconComponent],
  templateUrl: './advantages-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvantagesSectionComponent {
  readonly title = 'Ventajas Competitivas';
  advantages: AdvantageItem[] = [
    {
      icon: 'phishing',
      description: 'Pescado fresco del día',
    },
    {
      icon: 'handshake',
      description: 'Trato directo con pescadores',
    },
    {
      icon: 'localShipping',
      description: 'Entregas rápidas en Magangué',
    },
  ];
}
