import { TemplateRef } from '@angular/core';
export declare class DropdownOption {
    _content: TemplateRef<any>;
    value: any;
    metadata: any;
    label: string;
    sublabel: string;
    prepIcon?: string;
    appIcon?: string;
    appIconSrc?: string;
    prepIconSrc?: string;
    disabled: boolean;
}