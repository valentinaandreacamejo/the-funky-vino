import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly email = 'ciao@thefunkyvino.it';
  protected readonly phone = '+39 02 1234 5678';
}
