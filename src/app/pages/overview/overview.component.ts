import {CommonModule} from "@angular/common";
import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
    standalone: true,
    imports: [CommonModule, RouterLink],
})
export class OverviewComponent {
}
