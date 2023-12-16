import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../models/Section';
import { TimesPipe } from '../../directives/pipes/TimesPipe';


@Component({
  selector: 'app-concert-section',
  standalone: true,
  imports: [CommonModule, TimesPipe],
  templateUrl: './concert-section.component.html',
  styleUrl: './concert-section.component.css'
})
export class ConcertSectionComponent {

  @Input() section!: Section;
  ngOnInit(){
    console.log('created')

  }

}
