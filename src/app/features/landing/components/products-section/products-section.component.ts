import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ProductStatus } from '../../../../core/enums';
import { ProductCardComponent } from "../../../../shared/components/product-card/product-card.component";

@Component({
  selector: 'app-products-section',
  imports: [ProductCardComponent],
  templateUrl: './products-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSectionComponent {
  products: Product[] = [
    {
      id: '1',
      title: 'Bagre',
      description: 'Pescado de río de carne blanca y suave, ideal para freír o sudar.',
      imageUrl: 'https://placehold.co/600x400',
      price: 100,
      status: ProductStatus.AVAILABLE_FRESH
    },
    {
      id: '2',
      title: 'Bocachico',
      description: 'Pescado de río, de sabor intenso y textura firme, perfecto para asar.',
      imageUrl: 'https://placehold.co/600x400',
      price: 200,
      status: ProductStatus.AVAILABLE_FRESH
    },
    {
      id: '3',
      title: 'Mojarra',
      description: 'Pescado de río, versátil y delicioso, ideal para freír entera o en filetes.',
      imageUrl: 'https://placehold.co/600x400',
      price: 300,
      status: ProductStatus.AVAILABLE_FRESH
    }
  ];

}
