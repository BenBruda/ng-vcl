import { QueryList, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
export interface NavigationItem {
    label: string;
    selected?: boolean;
    opened?: boolean;
    heading: boolean;
    prepIcon?: string;
    appIcon?: string;
    class?: string;
    items: NavigationItem[] | undefined;
    href?: string;
    route?: any[];
}
export declare class NavigationItemDirective implements NavigationItem {
    private router;
    private nav;
    parent: NavigationItemDirective | undefined;
    private _route;
    private _urlTree;
    private _subscription;
    label: string;
    name: string;
    readonly items: any;
    selected: boolean;
    selectable: boolean;
    opened: boolean;
    heading: boolean;
    prepIcon: string | undefined;
    appIcon: string | undefined;
    class: string | undefined;
    href: string | undefined;
    exactRoute: boolean;
    onHover: EventEmitter<NavigationItem>;
    route: any[] | undefined;
    contentItems: QueryList<NavigationItemDirective>;
    constructor(router: Router, nav: any, parent: NavigationItemDirective | undefined);
    private updateSelectedState();
    openParents(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    readonly calcPrepIcon: string | undefined;
    readonly calcAppIcon: string | undefined;
    mouseOver(): void;
}
export declare class NavigationComponent {
    private router;
    ident: string;
    ariaRole: string;
    tabindex: number;
    type: string;
    useRouter: boolean;
    subLevelHintIconClosed: string;
    subLevelHintIconOpened: string;
    subLevelHintIconSide: 'left' | 'right';
    inputItems?: QueryList<NavigationItem> | undefined;
    select: EventEmitter<NavigationItem>;
    navigate: EventEmitter<{}>;
    contentItems?: QueryList<NavigationItem>;
    constructor(router: Router);
    readonly navigationItems: never[] | QueryList<NavigationItem>;
    private runItems(cb);
    selectRoute(route: any[], openParents?: boolean): void;
    private selectedItem;
    selectItem(item: NavigationItemDirective): void;
    onSubItemSelect(item: any): void;
    mouseOver(item: NavigationItemDirective): void;
}