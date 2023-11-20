import {CommonModule} from "@angular/common";
import {Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {noop} from "rxjs";
import {OnChangeCallback, OnTouchedCallback} from "../../types/value-accessor-types";

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar-2.component.html',
    styleUrls: ['./search-bar-2.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule],
    providers: [
        {
            // needed to be accessible from the Angular forms API
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SearchBar2Component),
            multi: true,
        },
    ],
})
export class SearchBar2Component implements ControlValueAccessor {

    @ViewChild('inputElement') _inputElementRef!: ElementRef;

    @Input() active = false;

    @Output() activeChange = new EventEmitter<boolean>();

    private _searchText = '';

    get searchText(): string {
        return this._searchText;
    }

    @Input() set searchText(value: string) {
        this._searchText = value;
        this._onChange(this._searchText);
    }

    @Output() searchTextChange = new EventEmitter<string>();

    @Input() disabled = false;

    private _onChange: OnChangeCallback<string> = noop;

    private _onTouched: OnTouchedCallback = noop;

    onInputChangeEvent(value: string): void {
        this._searchText = value;
        this.searchTextChange.emit(value);
        this._onChange(value);
    }

    onInputBlurEvent(): void {
        this._onTouched();
    }

    writeValue(value: string): void {
        this._searchText = value;
        this.searchTextChange.emit(value);
    }

    registerOnChange(callback: OnChangeCallback<string>): void {
        this._onChange = callback;
    }

    registerOnTouched(callback: OnTouchedCallback): void {
        this._onTouched = callback;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onShow(): void {
        this._changeActiveState(true);
    }

    onHide(): void {
        this._changeActiveState(false);
    }

    private _changeActiveState(value: boolean): void {
        this.active = value;
        this.activeChange.emit(value);
        if (value) {
            // request input focus (NOTE: interrupts animation without timeout)
            setTimeout(() => this._inputElementRef.nativeElement?.focus(), 500);
        }
    }
}
