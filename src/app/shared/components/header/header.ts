import { Component, signal } from '@angular/core';
import { Badge } from '../badge/badge';
import { Button } from '../button/button';

interface NavLink {
  index: string;
  label: string;
  href: string;
}

@Component({
  imports: [Badge, Button],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  protected readonly links: NavLink[] = [
    { index: '01', label: 'The Wines', href: '#wines' },
    { index: '02', label: 'Bites', href: '#bites' },
    { index: '03', label: 'Events', href: '#events' },
    { index: '04', label: 'Find Us', href: '#find-us' },
  ];

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
