import {CommonModule} from "@angular/common";
import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SearchBar1Component} from "../../components/search-bar-1/search-bar-1.component";

@Component({
    templateUrl: './example-1.component.html',
    styleUrls: ['./example-1.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule, SearchBar1Component],
})
export class Example1Component {

    searchText = '';

    active = false;

    onActiveChangeEvent(value: boolean): void {
        this.active = value;
    }
}
