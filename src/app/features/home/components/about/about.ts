import { Component } from '@angular/core';
import { Badge } from '../../../../shared/components/badge/badge';

@Component({
  imports: [Badge],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  protected readonly values = ['Small growers', 'Low intervention', 'Zero snobbery'];
}
