import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {VCLGalleryModule} from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { GalleryDemoComponent } from './demo.component';

export function demo() {
  return {
    label: 'Busy',
    tabs: {
      Demo: GalleryDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/ng-vcl/gallery/README.md')
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      },
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLGalleryModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ GalleryDemoComponent ],
  declarations: [ GalleryDemoComponent ]
})
export class GalleryDemoModule { }
