import { ChangeDetectorRef, ElementRef, EventEmitter, InjectionToken, SimpleChanges } from '@angular/core';
import { ObservableComponent } from '../core/index';
import { AnimationBuilder, AnimationFactory, AnimationMetadata } from '@angular/animations';
export declare type AttachmentX = 'left' | 'center' | 'right';
export declare const AttachmentX: {
    Left: AttachmentX;
    Center: AttachmentX;
    Right: AttachmentX;
};
export declare type AttachmentY = 'top' | 'center' | 'bottom';
export declare const AttachmentY: {
    Top: AttachmentY;
    Center: AttachmentY;
    Bottom: AttachmentY;
};
export declare enum PopoverState {
    visible = 0,
    hidden = 1,
    opening = 2,
    closing = 3,
}
export declare const POPOVER_ANIMATIONS: InjectionToken<{}>;
export interface PopoverAnimationConfig {
    enter?: AnimationMetadata | AnimationMetadata[];
    leave?: AnimationMetadata | AnimationMetadata[];
}
export declare class PopoverComponent extends ObservableComponent {
    protected readonly me: ElementRef;
    private builder;
    private cdRef;
    private animations;
    private static readonly Tag;
    private tag;
    enableStyling: boolean;
    debug: boolean;
    target?: string | ElementRef | Element;
    private targetElement?;
    targetX: AttachmentX;
    targetY: AttachmentY;
    attachmentX: AttachmentX;
    attachmentY: AttachmentY;
    visible: boolean;
    willClose: EventEmitter<any>;
    willOpen: EventEmitter<any>;
    state: PopoverState;
    readonly classHidden: boolean;
    readonly styleVisibility: string;
    private translateX;
    private translateY;
    readonly transform: string;
    enterAnimationFactory: AnimationFactory | undefined;
    leaveAnimationFactory: AnimationFactory | undefined;
    constructor(me: ElementRef, builder: AnimationBuilder, cdRef: ChangeDetectorRef, animations: PopoverAnimationConfig);
    private setTarget(value);
    private setTag();
    reposition(): void;
    private ngOnInit();
    private ngAfterViewInit();
    ngOnChanges(changes: SimpleChanges): void;
    open(): void;
    close(): void;
    toggle(): void;
    onWindowResize(ev: any): void;
    private getAttachmentPosition();
}
