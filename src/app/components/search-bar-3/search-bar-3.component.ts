import {CommonModule} from "@angular/common";
import {AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild} from '@angular/core';
import {FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {noop} from "rxjs";
import {OnChangeCallback, OnTouchedCallback} from "../../types/value-accessor-types";

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar-3.component.html',
    styleUrls: ['./search-bar-3.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule],
    providers: [
        {
            // needed to be accessible from the Angular forms API
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SearchBar3Component),
            multi: true,
        },
    ],
})
export class SearchBar3Component implements AfterViewInit {

    @ViewChild('buttons') _buttonsElementRef!: ElementRef;

    @ViewChild('inputElement') _inputElementRef!: ElementRef;

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

    @Input() autoFocus = true;

    @Output() onOpen = new EventEmitter<void>();

    @Output() onClose = new EventEmitter<void>();

    @Output() onFocus = new EventEmitter<void>();

    @Output() onBlur = new EventEmitter<void>();

    @Output() onEnterKey = new EventEmitter<string>();

    private _active = false;

    get active(): boolean {
        return this._active;
    }

    buttonsOffset = 0;

    private _onChange: OnChangeCallback<string> = noop;

    private _onTouched: OnTouchedCallback = noop;

    ngAfterViewInit(): void {
        this.buttonsOffset = this._buttonsElementRef.nativeElement.offsetWidth ?? 0;
    }

    onInputChangeEvent(value: string): void {
        this._searchText = value;
        this.searchTextChange.emit(value);
        this._onChange(value);
    }

    onInputFocusEvent(): void {
        this.onFocus.emit();
    }

    onInputBlurEvent(): void {
        this._onTouched();
        this.onBlur.emit();
    }

    onEnterKeyEvent(): void {
        this.onEnterKey.emit(this._searchText);
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

    toggle(): void {
        this._changeActiveState(!this._active);
    }

    open(): void {
        this._changeActiveState(true);
    }

    close(): void {
        this._changeActiveState(false);
    }

    private _changeActiveState(value: boolean): void {
        if (this._active !== value) {
            this._active = value;
            if (value) {
                this.onOpen.emit();
                if (this.autoFocus) {
                    this._requestSearchFieldFocus();
                }
            } else {
                this.onClose.emit();
            }
        }
    }

    private _requestSearchFieldFocus(): void {
        setTimeout(() => this._inputElementRef.nativeElement?.focus());
    }
}
