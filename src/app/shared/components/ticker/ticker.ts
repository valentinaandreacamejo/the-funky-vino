import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ticker',
  styleUrl: './ticker.scss',
  templateUrl: './ticker.html',
})
export class Ticker {
  readonly items = input<string[]>([
    '🍷 Pet-Nat & Orange Wines',
    '🥖 Artisanal Bites',
    '✨ Live DJ Sets on Fridays',
    '🥂 Pouring Daily from 18:00',
  ]);

  /** Durata in secondi di un giro completo. */
  readonly duration = input(30);

  // La lista è duplicata per un loop senza stacchi; la copia è nascosta agli screen reader.
  protected readonly copies = [0, 1];
}
