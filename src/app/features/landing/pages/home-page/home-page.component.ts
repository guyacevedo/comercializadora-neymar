import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { AboutSectionComponent } from "../../components/about-section/about-section.component";
import { ProductsSectionComponent } from "../../components/products-section/products-section.component";
import { ServicesSectionComponent } from "../../components/services-section/services-section.component";
import { AdvantagesSectionComponent } from "../../components/advantages-section/advantages-section.component";
import { NewsSectionComponent } from "../../components/news-section/news-section.component";
import { TestimonialsSectionComponent } from "../../components/testimonials-section/testimonials-section.component";
import { ContactSectionComponent } from "../../components/contact-section/contact-section.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, AboutSectionComponent, ProductsSectionComponent, ServicesSectionComponent, AdvantagesSectionComponent, NewsSectionComponent, TestimonialsSectionComponent, ContactSectionComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {

}
