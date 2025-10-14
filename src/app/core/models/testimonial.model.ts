export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  imageSrc: string;
  rating: number; // 0 to 5, allowing half steps (e.g., 4.5)
}
