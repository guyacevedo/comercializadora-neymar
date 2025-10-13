import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { AboutSectionComponent } from "../../components/about-section/about-section.component";
import { ProductsSectionComponent } from "../../components/products-section/products-section.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, AboutSectionComponent, ProductsSectionComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {

}
