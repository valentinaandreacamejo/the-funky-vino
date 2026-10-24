import { Component, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'light' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

/** Bottone ovale da applicare come attributo: `<a app-button>` o `<button app-button>`. */
@Component({
  imports: [],
  selector: 'a[app-button], button[app-button]',
  styleUrl: './button.scss',
  templateUrl: './button.html',
  host: {
    '[attr.data-variant]': 'variant()',
    '[attr.data-size]': 'size()',
  },
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
}
