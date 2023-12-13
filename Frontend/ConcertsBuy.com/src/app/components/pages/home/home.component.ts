import { Component } from '@angular/core';
import { ConcertsGridComponent } from '../../concerts-grid/concerts-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ConcertsGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
