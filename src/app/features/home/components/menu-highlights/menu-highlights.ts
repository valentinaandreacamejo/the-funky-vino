import { Component } from '@angular/core';
import { MenuCategory } from '../../../../core/models';

@Component({
  imports: [],
  selector: 'app-menu-highlights',
  styleUrl: './menu-highlights.scss',
  templateUrl: './menu-highlights.html',
})
export class MenuHighlights {
  protected readonly categories: MenuCategory[] = [
    {
      id: 'bubbles',
      label: 'Pet-Nat & Bubbles',
      icon: 'assets/icons/bottiglia-vino-doodle.svg',
      description: 'Cloudy, crunchy and naturally sparkling — bottled mid-ferment, zero fuss.',
      items: [
        { name: 'Pet-Nat Rosato', origin: 'Veneto', price: '€7 / 34' },
        { name: 'Col Fondo', origin: 'Treviso', price: '€6 / 30' },
        { name: 'Crémant Zéro Dosage', origin: 'Jura', price: '€9 / 45' },
      ],
    },
    {
      id: 'bites',
      label: 'Small Plates & Sharing',
      icon: 'assets/icons/piatto-posate-doodle.svg',
      description: 'Naturally leavened sourdough, burrata, marinated olives & other things worth fighting over.',
      items: [
        { name: 'Sourdough & cultured butter', price: '€5' },
        { name: 'Burrata, figs & chili oil', price: '€12' },
        { name: 'Marinated olives & citrus', price: '€5' },
      ],
    },
    {
      id: 'orange-reds',
      label: 'Funky Orange & Reds',
      icon: 'assets/icons/calici-brindisi-doodle.svg',
      description: 'Skin-contact macerations and light, juicy reds served cool. Glou glou approved.',
      items: [
        { name: 'Ribolla macerata', origin: 'Friuli', price: '€8 / 38' },
        { name: 'Frappato, chilled', origin: 'Sicily', price: '€7 / 33' },
        { name: 'Gamay', origin: 'Beaujolais', price: '€8 / 36' },
      ],
    },
  ];
}
