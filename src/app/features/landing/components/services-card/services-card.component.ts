import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ICON_PATHS } from '../../../../shared/icons/icon-paths';
import { SvgIconComponent } from "../../../../shared/icons/svg-icon.component";

@Component({
  selector: 'app-services-card',
  imports: [SvgIconComponent],
  templateUrl: './services-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesCardComponent {
  icon= input<keyof typeof ICON_PATHS>('menu');
  title= input('Venta al por Mayor');
  description= input('Ofrecemos precios competitivos y volumen para distribuidores, comerciantes y restaurantes. Garantizamos frescura y entrega a tiempo para su negocio.');
}
