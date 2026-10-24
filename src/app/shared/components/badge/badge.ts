import { Component, input } from '@angular/core';

export type BadgeVariant = 'tag' | 'stamp' | 'seal';
export type BadgeTone = 'cream' | 'ruby' | 'rose' | 'dark';

/**
 * Etichetta decorativa:
 * - `tag`   mini cartellino tratteggiato (numerazioni, chip)
 * - `stamp` francobollo con bordo perforato
 * - `seal`  sigillo circolare seghettato
 */
@Component({
  imports: [],
  selector: 'app-badge',
  styleUrl: './badge.scss',
  templateUrl: './badge.html',
  host: {
    '[attr.data-variant]': 'variant()',
    '[attr.data-tone]': 'tone()',
  },
})
export class Badge {
  readonly variant = input<BadgeVariant>('tag');
  readonly tone = input<BadgeTone>('cream');
}
