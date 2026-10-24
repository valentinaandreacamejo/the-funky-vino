import { Component } from '@angular/core';

interface OpeningHours {
  days: string;
  hours: string;
}

interface SocialLink {
  label: string;
  href: string;
}

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly hours: OpeningHours[] = [
    { days: 'Mon — Thu', hours: '18:00 – 00:00' },
    { days: 'Fri — Sat', hours: '18:00 – 02:00' },
    { days: 'Sunday', hours: '11:00 – 15:00 · 18:00 – 00:00' },
  ];

  protected readonly socials: SocialLink[] = [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/' },
    { label: 'Spotify playlist', href: 'https://open.spotify.com/' },
  ];
}
