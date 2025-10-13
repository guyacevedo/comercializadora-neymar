import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  imports: [],
  templateUrl: './main-carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainCarouselComponent implements AfterViewInit, OnDestroy {
  readonly imageUrls: string[] = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAN7qNU6bCPfdKCuhhDRzj9-b6re9kIcgzGWdUOUFzDk3IN-ZplQq94gAqxRa46z-JZ-A-_FQHCPmk4ckej7tZOmyR2u3JCsBWUjy2QtJCYJIPsnoukwXgBQ5u4Axg1vi1c7VapVGUbgq1yAMLUfGpnJF5Q4G3uYxJ3J3-sQOSMvxRqBmZh4tKsFIlB-sj6yw8FbfkUfH69twGKlVHyArinwQBOQM5ZX8Kn2t9HcBQP8H5Q8mHWoDaoj2vNHMxSYJ7s5rfFyj_C5T0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB7AIFyYpjdLJA86JAFO3lF0PbjTBVYX8-ycqPA8b8k9tOwuWGkQrYSR1WLiT55GnDl1Cm2HePHnEIDr_4d6GwjLaKNUD3FWaGTbA8EP19YppNrrXOXkz0xliDKXWhBBSMboCT_Lbq-nUjg9octQzx5GGIdy-rROEMwCHxi7OxPFkK5DkeOWOqf2PYifLjr-WzWi6mNoT7_pea7Jre4LwzcxlXkeHFcS1vpwfifjoYc2z9m0Scb_MA0qZyuKzDvthQFkzT22aPSmuU',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDqibl6ij4if8wErA1zLj1PKnBZwOVd-wfqymnA73riX6F_QmuInQok4po9HxyYNyQKqbDdAMaKfXQ2hnQVGGvfRO-_B06t1ZztDfwtPL4q_mHZO6NDwsEQohF1H7_cUNy6BfRLupF5KTVNXcEJGsFH3cYkFY5JG8btp8MbIjIDkQFjSjN20nHqONGn1-29xOJCoGO1SEz018GfTHlTrDvn9KhGtC_whrla-gFM3Oxaump9IH2iHV0JiYwdwCC7xbOwNyGvT0q39Jg',
  ];

  readonly activeIndex = signal(0);
  private platformId = inject(PLATFORM_ID);
  private intervalId: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  private changeSlide() {
    this.activeIndex.update((index) => (index + 1) % this.imageUrls.length);
  }

  ngAfterViewInit(): void {
    // Start the automatic slide change
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => this.changeSlide(), 5000); // Change slide every 5 seconds
    }
  }

  ngOnDestroy() {
    // Clean up the interval when the component is destroyed
    if (isPlatformBrowser(this.platformId)) {
      clearInterval(this.intervalId);
    }
  }

  get currentIndex() {
    return this.activeIndex();
  }
}
