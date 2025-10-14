import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { Testimonial } from '../../../../core/models/testimonial.model';

@Component({
  selector: 'app-testimonials-carousel',
  imports: [SvgIconComponent],
  templateUrl: './testimonials-carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsCarouselComponent {
  testimonials = input<Testimonial[] | []>([]);
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
    const total = this.testimonials().length;
    const newIndex = (this.currentTestimonialIndex() - 1 + total) % total;
    this.currentTestimonialIndex.set(newIndex);
  }

  nextTestimonial(): void {
    const total = this.testimonials().length;
    const newIndex = (this.currentTestimonialIndex() + 1) % total;
    this.currentTestimonialIndex.set(newIndex);
  }
}
