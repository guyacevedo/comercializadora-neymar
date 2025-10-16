import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { ICON_PATHS } from '../../../../shared/icons/icon-paths';

export interface Item {
  icon: keyof typeof ICON_PATHS;
  title: string;
  summary: string;
}

@Component({
  selector: 'app-about-page',
  imports: [SvgIconComponent],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  readonly image = {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ--6zdY_TbsbtyyFPyLvABh1vAqzoxfH337OfjNjf722Zo7cS1vqvZ7ir60imbkFKXIAoaJKk1G-YQzEEkpcad-Q3ChCC9H2YtXvcwfFvAuP3CTuZIAbN1f5jJQJ9i2rTIPwLm2g1HQQuD_9r4hjppvfrdS_9inMfyvA-38PqafTakwXlxlNqImjOhkcFrdkPVjmJz_M93Vm7mMvJl6O3KKwuU_jrxBsTpzNhMRJ_i_PAHbNHZLbn9vwXzFBTq8_lOvuRMuB_5hU',
    ariaLabel: 'Pescadores en el Río Magdalena, reflejando la esencia de Pesquera NEYMAR',
  };
  readonly title = 'Acerca de NEY MAR';
  readonly subTitle = 'Tradición y frescura directamente del corazón pesquero de Colombia.';
  readonly summary = `<p>
      Desde nuestra fundación en el corazón de Magangué, Bolívar,
      <strong>Pesquera NEYMAR</strong> se ha erigido como un pilar en la comercialización de pescado
      ribereño fresco, directamente extraído de las ricas aguas del Río Magdalena. Somos una empresa
      familiar que ha transmitido de generación en generación la pasión por la pesca, el respeto por
      los ecosistemas acuáticos y un compromiso inquebrantable con las comunidades de pescadores
      locales.
    </p>
    <p>
      Nuestra historia no es solo la de un negocio, es la crónica de un profundo vínculo con el río
      y su gente. Entendemos que cada pescado que llega a su mesa lleva consigo el esfuerzo y la
      dedicación de un pescador artesanal. Por ello, trabajamos mano a mano con ellos, asegurando
      prácticas justas y sostenibles que no solo garantizan la mejor calidad de productos como el
      Bagre, el Bocachico y la Mojarra, sino que también contribuyen al bienestar y desarrollo de
      nuestra comunidad.
    </p>`;
  readonly missionSummary = `Ofrecer a nuestros clientes el pescado ribereño más fresco y de la más alta calidad,
        proveniente de prácticas de pesca sostenibles en el Río Magdalena, fomentando el desarrollo
        económico de las comunidades pesqueras de Magangué y garantizando la satisfacción total en
        cada entrega.`;
  readonly vissionSummary = `Ser la pesquera líder y de mayor confianza en Colombia, reconocida por nuestra excelencia en
        calidad, nuestro compromiso con la sostenibilidad ambiental y social, y por llevar la
        riqueza del pescado ribereño colombiano a todos los rincones del país, innovando
        constantemente en nuestros procesos y servicios.`;
  readonly ourValues: Item[] = [
    {
      icon: 'verified',
      title: 'Calidad',
      summary: `Seleccionamos rigurosamente cada producto para garantizar una frescura y sabor
              inigualables, desde el río hasta su mesa.`,
    },
    {
      icon: 'handshake',
      title: 'Compromiso',
      summary: `Apoyamos a nuestros pescadores locales con precios justos y promovemos el desarrollo
              de la comunidad de Magangué.`,
    },
    {
      icon: 'compost',
      title: 'Sostenibilidad',
      summary: `Implementamos y promovemos prácticas de pesca responsables para asegurar la salud de
              nuestros ríos para futuras generaciones.`,
    },
    {
      icon: 'diversity_3',
      title: 'Integridad',
      summary: `Actuamos con transparencia y honestidad en todas nuestras operaciones, construyendo
              relaciones de confianza con clientes y proveedores.`,
    },
  ];
  readonly ourAdvantages: Item[] = [
    {
      icon: 'verified',
      title: 'Calidad y Frescura',
      summary:
        ' Del Río Magdalena a tu mesa, garantizando un producto de calidad e higiene en todos nuestros procesos.',
    },
    {
      icon: 'compost',
      title: 'Compromiso Sostenible',
      summary: 'Apoyamos la pesca responsable para proteger nuestros ecosistemas acuáticos.',
    },
    {
      icon: 'handshake',
      title: 'Apoyo a lo Local',
      summary:
        'Al comprarnos, apoyas directamente a las familias de pescadores artesanales de Magangué.',
    },
    {
      icon: 'diversity_3',
      title: 'Atención Personalizada',
      summary:
        'Brindamos un servicio cercano y adaptado a las necesidades de cada cliente, ya sea mayorista o detal.',
    },
    {
      icon: 'localShipping',
      title: 'Logística Confiable<',
      summary: 'Garantizamos la cadena de frío para una entrega puntual y segura en todo el país.',
    },
    {
      icon: 'globe',
      title: 'obertura Nacional',
      summary: 'Llevamos la riqueza del pescado ribereño colombiano a todos los rincones del país.',
    },
  ];
}
