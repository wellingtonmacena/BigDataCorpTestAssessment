import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../models/Section';
import { TimesPipe } from '../../directives/pipes/TimesPipe';
import { CharsPipe } from '../../directives/pipes/CharsPipe';
import { chunk } from '../../utils/ExtensionFunction';
import { Ticket } from '../../models/Ticket';

@Component({
  selector: 'app-concert-section',
  standalone: true,
  imports: [CommonModule, TimesPipe, CharsPipe],
  templateUrl: './concert-section.component.html',
  styleUrl: './concert-section.component.css',
})
export class ConcertSectionComponent {
  rows: Ticket[][] = [];
  chars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
  ];
  @Input() section!: Section;
  ngOnInit() {
    let maximumCollumnLength = 8;
    this.section.collumnsCount = maximumCollumnLength;
    this.section.availableTicketsCount = this.section.tickets.filter(
      (item) => item.isSold == false
    ).length;

    this.rows = chunk(this.section.tickets, maximumCollumnLength);
    this.section.rowsCount = this.rows.length;
    //console.log(this.rows);
  }

  saveTicket(event: any) {
    let className = "ticket-seat-in-hold";
    if (event.classList.contains(className)) {
      event.classList.remove(className);
    } else {
      event.classList.add(className);
    }
  }

  addToCart(ticket: Ticket) {
    // console.log(ticket);
  }
}
