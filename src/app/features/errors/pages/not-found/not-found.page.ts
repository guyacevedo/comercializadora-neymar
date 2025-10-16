import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}
