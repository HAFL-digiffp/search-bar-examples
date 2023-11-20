import {CommonModule} from "@angular/common";
import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SearchBar2ButtonDirective} from "../../components/search-bar-2/search-bar-2-button.directive";
import {SearchBar2Component} from "../../components/search-bar-2/search-bar-2.component";

@Component({
    templateUrl: './example-2.component.html',
    styleUrls: ['./example-2.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule, SearchBar2Component, SearchBar2ButtonDirective],
})
export class Example2Component {

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
