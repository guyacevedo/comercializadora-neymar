import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { PRODUCT_STATUS_LABELS } from '../../../core/enums/enum-labels';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  readonly productStatus = PRODUCT_STATUS_LABELS;

}
