import { Concert } from './../../interfaces/Concert';

import { Component } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { ConcertsService } from '../../services/concerts-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concerts-grid',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule],
  templateUrl: './concerts-grid.component.html',
  styleUrl: './concerts-grid.component.css',
})
export class ConcertsGridComponent {
  objectType: string = 'concert';
  allConcerts: Concert[] = [];
  concerts: Concert[] = [];

  constructor(
    private concertsService: ConcertsService,
    private router: Router
  ) {
    this.getConcerts();
  }

  parseDate(date: string) {
    return date.split('T')[0];
  }

  redirect(concert: Concert) {
    this.router.navigate([`/concert-info/${concert.id}`]);
  }

  async getConcerts() {
    let response = await this.concertsService.getAllConcerts();

    this.allConcerts = response;
    this.concerts = response;
    console.log(this.allConcerts);
  }
}
