import {CommonModule} from "@angular/common";
import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SearchBar1Component} from "../../components/search-bar-1/search-bar-1.component";

@Component({
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
    standalone: true,
    imports: [CommonModule, RouterLink, SearchBar1Component],
})
export class OverviewComponent {
}
