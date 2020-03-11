import { Component, Output, EventEmitter } from '@angular/core';

import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() searchListEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  query: string;

  search(event: KeyboardEvent) {
    of(event)
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(t => {
        this.searchListEventEmitter.emit(this.query)
      })
  }
}
