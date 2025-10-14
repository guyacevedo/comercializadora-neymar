import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SvgIconComponent } from "../../../../shared/icons/svg-icon.component";

// Define a simple interface for the testimonial data
export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  imageSrc: string;
  rating: number; // 0 to 5, allowing half steps (e.g., 4.5)
}


@Component({
  selector: 'app-testimonials-section',
  imports: [SvgIconComponent],
  templateUrl: './testimonials-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsSectionComponent {
  // Array of testimonial data
  testimonials: Testimonial[] = [
    {
      quote: 'El pescado más fresco que he probado, ¡excelente servicio!',
      author: 'Laura García',
      title: 'Chef',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAggRrCjYkr8jA7O_Hc0fGlo7nbkTawn6AxIhcaoNw0-NH6AJNglUWZMaHDZc8fl5LYOqPh79UMAJYN4Vtj9qjxUqFSNNMKDjbGuSy5X8-ZJ20KyFFZ6CDX16CJanbEkLSYguzGxor198wrtVO0mDOYVYLdemZZRIZuKdAlXke7v_C7lHBWoYARoI_y7hFFXlh3mVtIdRuA6sXlntYNsZhamq1mH4JiV6RbSjTEge_FwWqogfDSKsRR728-m5HJRwsYxj59qsvD7c',
      rating: 5,
    },
    {
      quote: 'Siempre cumplen con mis expectativas. Calidad y puntualidad inmejorables.',
      author: 'Carlos Rodríguez',
      title: 'Restaurante Mar Azul',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3tnvIdBbFJRzYMV3QeEvlM3WGDg-mZEE9hPMZCrb3Ldpbrun8m-JaLc02qkYmQ64F64we4ck7n_NGhYVLnvWBAGanZz9v3gE3WkAGaDj4MQDl8LpsgvBop1KmB4AmJt9hWuBNdI7zhxBWZXzD-C8PRIgaEWYhApXMrL-rKh_I6hD9w718_ykkDK7W-TXixrPRLVcAAD4eLn2T1v7dkGda3qInBlcaQxhrc_kju3Xv-Vcf8GpmbY96AjvhMRyI4v-_zn0K4mxdFx8',
      rating: 4.5,
    },
    {
      quote: '¡Increíblemente fresco! La mejor opción para comprar pescado en la región.',
      author: 'Sofía Martínez',
      title: 'Cliente Satisfecha',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeS2_GcNznf5W59gmahtE2y5OUeom-IeWW_9GcnUIBYuqLytRVj3TeT8qg6o-bG97hZpaRMZILmMG4ivIoJSKGTR3G_ynGN4IlG5JYHpcWBfytU3v3pHwK-XKqq5ncU6R_OYLwiD_qEjAZhMmWtK9eireIaC2-tWaQXJ7kgXbLFrBaWMLz_pWJZ4aluJde-FA_gK99Y3lrCgN3onDf3pbMTKJit8GFC9TlP3isqA13sBNi9scvbfpybgaeyoq_w40tTv-1NXYdoHA',
      rating: 5,
    },
  ];

  // Signal for the currently active testimonial index
  currentTestimonialIndex = signal(0);

  // Computed signal to determine if a testimonial is active for the template
  isTestimonialActive = computed(() => (index: number) => {
    return this.currentTestimonialIndex() === index;
  });

  // Computed signal to determine the background color of a dot
  getDotClass = computed(() => (index: number) => {
    return this.currentTestimonialIndex() === index
      ? 'bg-primary-dark'
      : 'bg-slate-300 hover:bg-slate-400';
  });

  // Computed signal for rating stars
  // Creates an array of star types (star, star_half, star_border) for iteration
  getRatingStars = computed(() => (rating: number) => {
    const stars: string[] = [];
    let fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('star');
    }

    if (hasHalfStar) {
      stars.push('star_half');
      fullStars++; // Increment to correctly calculate the remaining empty stars
    }

    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push('star_border');
    }

    return stars;
  });


  showTestimonial(index: number): void {
    // Only update the signal if the index is different to avoid unnecessary updates
    if (this.currentTestimonialIndex() !== index) {
      this.currentTestimonialIndex.set(index);
    }
  }

  prevTestimonial(): void {
    const total = this.testimonials.length;
    const newIndex = (this.currentTestimonialIndex() - 1 + total) % total;
    this.currentTestimonialIndex.set(newIndex);
  }

  nextTestimonial(): void {
    const total = this.testimonials.length;
    const newIndex = (this.currentTestimonialIndex() + 1) % total;
    this.currentTestimonialIndex.set(newIndex);
  }

}
