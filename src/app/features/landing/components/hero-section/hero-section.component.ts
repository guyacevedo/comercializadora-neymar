import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { APP_SHARED_INFO } from '../../../../core/config/app-info';

@Component({
  selector: 'app-hero-section',
  imports: [MainCarouselComponent],
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly title = APP_SHARED_INFO.razonSocial;
  readonly summary = `Frescura y calidad del río Magdalena a tu mesa.`;
  readonly button = {
    title: 'Más Información del Pescado',
    href: '#productos',
  };
}
