import {Directive, HostListener} from '@angular/core';
import {SearchBar2Component} from "./search-bar-2.component";

@Directive({
    selector: '[appSearchBarButton]',
    standalone: true,
})
export class SearchBar2ButtonDirective {

    constructor(private readonly _searchBar: SearchBar2Component) {
    }

    @HostListener('click')
    private onClick(): void {
        this._searchBar.onShow();
    }
}
