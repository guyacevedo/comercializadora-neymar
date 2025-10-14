import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewsCardComponent } from '../../../../shared/components/news-card/news-card.component';
import { NewsItem } from '../../../../core/models/news-item.model';

@Component({
  selector: 'app-news-section',
  imports: [NewsCardComponent],
  templateUrl: './news-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsSectionComponent {
  readonly title = 'Nuestras últimas novedades';
  readonly newsItems: NewsItem[] = [
    {
      id: '0',
      title: 'El Bagre del Magdalena: Un manjar en tu mesa',
      summary:
        'Descubre por qué el Bagre de río es el favorito de muchos y cómo NEYMAR lo lleva fresco hasta tu hogar.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBoEknmOC17rPzEeabcCuG-uhN-nQOkAvjNOYgD9S_DqXkx7YlL3JTtKLsK_ADICDFoUqkA6CW4MilDz9q9hBq899tz13eG-8qOq7GM8Wos84Nlk-S6NQSWw-4iLPiivWXadZFxzR8lqGslx9Q4jR3xwhcGK2Ak0wzhPehHYdatmpOzhAG1O7mWbscY0IVmkJIUnNfwoOsfeLoAPck9JYF29mza5v1ZvwJFrT6I6viAeDdxSBleszolmErbLNRrWJYtiXznJQHF_cU',
      publishedDate: new Date('2023-10-15'),
      tags: ['Bagre', 'PescadoFresco', 'Recetas'],
    },
    {
      id: '1',
      title: 'Apoyando la pesca sostenible en Magangué',
      summary:
        'Conoce nuestro compromiso con las comunidades de pescadores y las prácticas sostenibles en el río Magdalena.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ--6zdY_TbsbtyyFPyLvABh1vAqzoxfH337OfjNjf722Zo7cS1vqvZ7ir60imbkFKXIAoaJKk1G-YQzEEkpcad-Q3ChCC9H2YtXvcwfFvAuP3CTuZIAbN1f5jJQJ9i2rTIPwLm2g1HQQuD_9r4hjppvfrdS_9inMfyvA-38PqafTakwXlxlNqImjOhkcFrdkPVjmJz_M93Vm7mMvJl6O3KKwuU_jrxBsTpzNhMRJ_i_PAHbNHZLbn9vwXzFBTq8_lOvuRMuB_5hU',
      publishedDate: new Date('2023-10-10'),
      tags: ['Sostenibilidad', 'Magangué', 'Comunidad'],
    },
    {
      id: '2',
      title: 'Mojarra: Versatilidad y sabor en tu cocina',
      summary:
        'Ideas para preparar la Mojarra, un pescado delicioso y fácil de cocinar, disponible siempre fresco en NEYMAR.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBoEknmOC17rPzEeabcCuG-uhN-nQOkAvjNOYgD9S_DqXkx7YlL3JTtKLsK_ADICDFoUqkA6CW4MilDz9q9hBq899tz13eG-8qOq7GM8Wos84Nlk-S6NQSWw-4iLPiivWXadZFxzR8lqGslx9Q4jR3xwhcGK2Ak0wzhPehHYdatmpOzhAG1O7mWbscY0IVmkJIUnNfwoOsfeLoAPck9JYF29mza5v1ZvwJFrT6I6viAeDdxSBleszolmErbLNRrWJYtiXznJQHF_cU',
      publishedDate: new Date('2023-10-05'),
      tags: ['Mojarra', 'CocinaColombiana', 'PescadoRibereño'],
    },
  ];
}
