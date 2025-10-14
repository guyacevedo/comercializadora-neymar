import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NewsItem } from '../../../core/models/news-item.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-card',
  imports: [DatePipe],
  templateUrl: './news-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent {
  newsItem = input<NewsItem>({
    id: '',
    title: 'Sample News Title',
    summary: 'This is a brief summary of the news item. It provides an overview of the content.',
    imageUrl: 'https://via.placeholder.com/400x200.png?text=News+Image',
    publishedDate: new Date(),
    tags: ['Tag1', 'Tag2'],
  });
}
