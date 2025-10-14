import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PRODUCT_STATUS_LABELS } from '../../../core/enums/enum-labels';
import { Product } from '../../../core/models/product.model';
import { ProductStatus } from '../../../core/enums/index';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
product = input<Product>({
  id: '',
  title: '',
  description: '',
  imageUrl: '',
  price: 0,
  status: ProductStatus.UNAVAILABLE
});
  readonly productStatus = PRODUCT_STATUS_LABELS;
}
