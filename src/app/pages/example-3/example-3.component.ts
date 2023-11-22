import {CommonModule} from "@angular/common";
import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SearchBar3Component} from "../../components/search-bar-3/search-bar-3.component";

@Component({
    templateUrl: './example-3.component.html',
    styleUrls: ['./example-3.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule, SearchBar3Component],
})
export class Example3Component {

    searchText = '';

    active = false;

    onOpenEvent(): void {
        console.log('search bar open');
        this.active = true;
    }

    onCloseEvent(): void {
        console.log('search bar close');
        this.active = false;
    }

    onFocusEvent(): void {
        console.log('search bar focus');
    }

    onBlurEvent(): void {
        console.log('search bar blur');
    }

    onEnterKeyEvent(searchText: string): void {
        console.log('search bar enter key: ' + searchText);
    }
}
