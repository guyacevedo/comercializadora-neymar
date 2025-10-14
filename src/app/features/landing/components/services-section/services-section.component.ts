import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServicesCardComponent } from '../services-card/services-card.component';
import { ICON_PATHS } from '../../../../shared/icons/icon-paths';

export interface Service {
  icon: keyof typeof ICON_PATHS;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-section',
  imports: [ServicesCardComponent],
  templateUrl: './services-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      icon: 'error',
      title: 'Venta al por Mayor',
      description:
        'Ofrecemos precios competitivos y volumen para distribuidores, comerciantes y restaurantes. Garantizamos frescura y entrega a tiempo para su negocio.',
    },
    {
      icon: 'error',
      title: 'Venta al Detal',
      description:
        'Atención personalizada para consumidores finales. Incluye preparación, limpieza y empaque especial para que disfrute del mejor pescado en casa.',
    },
    {
      icon: 'error',
      title: 'Logística y Entrega Eficiente',
      description:
        'Entregas rápidas y confiables en ciudades principales de Colombia. ¡Domicilios gratuitos en Magangué y zonas cercanas!',
    },
  ];
}
