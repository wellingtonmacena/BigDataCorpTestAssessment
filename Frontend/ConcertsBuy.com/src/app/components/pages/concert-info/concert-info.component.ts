import { Section } from '../../../models/Section';
import { ConcertsService } from '../../../services/concerts-service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Concert } from '../../../interfaces/Concert';
import { ConcertSectionComponent } from '../../concert-section/concert-section.component';
import { CommonModule } from '@angular/common';
import { Ticket } from '../../../models/Ticket';

import { v4 } from 'uuid';

@Component({
  selector: 'app-concert-info',
  standalone: true,
  imports: [ConcertSectionComponent, CommonModule],
  templateUrl: './concert-info.component.html',
  styleUrl: './concert-info.component.css',
})
export class ConcertInfoComponent {
  concert!: Concert;
  tickets!: Ticket[];

  constructor(
    private concertsService: ConcertsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.concert = await this.concertsService.getConcertById(id);
    this.tickets = await this.concertsService.getAllTicketsByConcertId(id);

    let objToMap = new Map<number, Ticket[]>();

    this.tickets.forEach((value, key) => {
      if (objToMap.has(value.section)) {
        objToMap.get(value.section)!.push(value);
      } else {
        objToMap.set(value.section, [value]);
      }
    });

    let sections: Section[] = [];
    let defaultCollumnMaximumCount = 8;

    for (let item of objToMap) {
      const myUUID = v4();
      let collumnCount =
        item[1].length <= defaultCollumnMaximumCount
          ? item[1].length
          : defaultCollumnMaximumCount;

      let rowsCount = Math.ceil(item[1].length / defaultCollumnMaximumCount);

      let section = new Section(
        item[0].toString(),
        myUUID,
        item[1].filter((item) => item.isSold == false).length,
        rowsCount,
        collumnCount
      );



      console.log('rowCount ' + rowsCount);
      console.log('collumnCount ' + collumnCount);

      section.tickets = item[1];

      sections.push(section);
      console.log(section);
    }

    this.concert.sections = sections;
    //console.log(sections);
  }

  parseDate(date: string) {
    return date.split('T')[0];
  }

  redirect(concert: Concert) {
    this.router.navigate([`/concert-info/${concert.id}`]);
  }
}
