import { Component, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @Input() objectType: string = '';
  allObjects: any[] = [];
  objects: any[] = [];
  placeholderMessage: string = '';
  faSearch = faSearch;

  ngOnInit() {
    this.placeholderMessage = `Here you can search by an ${this.objectType}`;
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (value == '') {
      this.objects = this.allObjects;
    } else {
      this.objects = this.allObjects.filter(
        (item) => item.name != null && item.name.toLowerCase().includes(value)
      );
    }
  }
}
