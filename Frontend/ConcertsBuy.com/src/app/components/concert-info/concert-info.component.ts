import { Section } from '../../models/Section';
import { ConcertsService } from './../../services/concerts-service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Concert } from '../../interfaces/Concert';
import { ConcertSectionComponent } from '../concert-section/concert-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-concert-info',
  standalone: true,
  imports: [ConcertSectionComponent, CommonModule],
  templateUrl: './concert-info.component.html',
  styleUrl: './concert-info.component.css',
})
export class ConcertInfoComponent {
  concert!: Concert;

  constructor(
    private concertsService: ConcertsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.concert = await this.concertsService.getConcert(id);

    let sec: Section[] = [];

    for (let index = 0; index < 3; index++) {
     // let randomNumberCollumn = Math.ceil(Math.random() * 11) +4;
    //  let randomNumberRow = Math.ceil(Math.random() * 11)+4;
      let randomNumberCollumn = 15
      let randomNumberRow = 15;
      sec.push(
        new Section(`Section ${sec.length + 1}`, 'ww', 4, randomNumberRow, randomNumberCollumn)
      );
    }

    this.concert.sections = sec;
    console.log(this.concert.sections);
  }

  parseDate(date: string) {
    return date.split('T')[0];
  }

  redirect(concert: Concert) {
    this.router.navigate([`/concert-info/${concert.id}`]);
  }
}
