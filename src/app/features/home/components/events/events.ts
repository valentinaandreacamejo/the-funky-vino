import { Component } from '@angular/core';
import { WineEvent } from '../../../../core/models';
import { Badge } from '../../../../shared/components/badge/badge';

@Component({
  imports: [Badge],
  selector: 'app-events',
  styleUrl: './events.scss',
  templateUrl: './events.html',
})
export class Events {
  protected readonly events: WineEvent[] = [
    {
      id: 'vinyl-nights',
      when: 'Every Thursday',
      title: 'Vinyl Nights & Natural Wine Flights',
      description: 'Three glasses picked by our somm, a stack of records and zero dress code. Bring your vinyl, we bring the funk.',
      time: '19:00 — late',
      price: '€25 · 3-glass flight',
    },
    {
      id: 'sunday-brunch',
      when: 'Sunday Brunch',
      title: 'Orange Wine & Fresh Pastries',
      description: 'Skin-contact wines meet buttery croissants, cardamom buns and slow Sunday tunes.',
      time: '11:00 — 15:00',
      price: '€30 · brunch + glass',
    },
  ];
}
