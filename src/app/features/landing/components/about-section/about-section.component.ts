import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  readonly image = {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ--6zdY_TbsbtyyFPyLvABh1vAqzoxfH337OfjNjf722Zo7cS1vqvZ7ir60imbkFKXIAoaJKk1G-YQzEEkpcad-Q3ChCC9H2YtXvcwfFvAuP3CTuZIAbN1f5jJQJ9i2rTIPwLm2g1HQQuD_9r4hjppvfrdS_9inMfyvA-38PqafTakwXlxlNqImjOhkcFrdkPVjmJz_M93Vm7mMvJl6O3KKwuU_jrxBsTpzNhMRJ_i_PAHbNHZLbn9vwXzFBTq8_lOvuRMuB_5hU',
    ariaLabel: 'Pescadores artesanales en el río Magdalena, Colombia',
  };
  readonly title = 'Nuestra Historia: Pasión por el Pescado Ribereño';
  readonly summary = `Pesquera NEYMAR es una empresa familiar con décadas de tradición en la comercialización de
        pescado ribereño fresco del río Magdalena. Nuestro compromiso es con la calidad, la
        sostenibilidad y el apoyo a las comunidades de pescadores locales en Magangué, corazón de la
        pesca en Colombia.`;
}
