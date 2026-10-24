import { Component } from '@angular/core';
import { Ticker } from '../../shared/components/ticker/ticker';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Events } from './components/events/events';
import { Hero } from './components/hero/hero';
import { MenuHighlights } from './components/menu-highlights/menu-highlights';

@Component({
  imports: [Hero, Ticker, MenuHighlights, About, Events, Contact],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
