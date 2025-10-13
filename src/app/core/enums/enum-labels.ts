import {
  ProductStatus
} from './index';

// Product Status Labels
export const PRODUCT_STATUS_LABELS = new Map<ProductStatus, string>([
  [ProductStatus.AVAILABLE_FRESH, 'Disponible Fresco'],
  [ProductStatus.AVAILABLE_FROZEN, 'Disponible Congelado'],
  [ProductStatus.AVAILABLE_SALTED, 'Disponible Salado'],
  [ProductStatus.AVAILABLE, 'Disponible'],
  [ProductStatus.OUT_OF_SEASON, 'Fuera de Temporada'],
  [ProductStatus.IN_SEASON, 'En Temporada'],
  [ProductStatus.OUT_OF_STOCK, 'Agotado'],
  [ProductStatus.UNAVAILABLE, 'No Disponible']
]);

// Utility function to get the label from any enum-labels Map
export function getEnumLabel<T extends string>(map: Map<T, string>, value: T | undefined | null): string {
  if (!value) return 'Sin especificar';
  return map.get(value) ?? value;
}