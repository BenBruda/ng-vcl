import { NgModule, APP_BOOTSTRAP_LISTENER, ModuleWithProviders, Injector, ViewContainerRef } from '@angular/core';
import { ComponentType } from './../core/index';
import { TemplateWormhole,  ComponentWormhole, Wormhole, WormholeAttributes, createWormhole, WormholeManager, WormholeRef } from './wormhole';
import { WormholeDirective } from './wormhole.directive';
import { WormholeService } from './wormhole.service';

export { TemplateWormhole, ComponentWormhole, Wormhole, WormholeAttributes, WormholeDirective, WormholeService, createWormhole, WormholeManager, WormholeRef };

export function bootstrapWormhole(wormholeService: WormholeService) {
  return () => {
    wormholeService.ready();
  };
}

@NgModule({
  exports: [WormholeDirective],
  declarations: [WormholeDirective],
  providers: [
    WormholeService,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      deps: [ WormholeService ],
      useFactory: bootstrapWormhole
    }
  ]
})
export class VCLWormholeModule {
  static withRootComponents(...components: ComponentType<any>[]): ModuleWithProviders {
    return {
      ngModule: VCLWormholeModule,
      providers: [
        {
          provide: APP_BOOTSTRAP_LISTENER,
          multi: true,
          deps: [ WormholeService ],
          useFactory: (wormholeService: WormholeService) => {
            return () => {
              components.forEach(lc => wormholeService.attachComponent(lc));
            };
          }
        }
      ]
    };
  }
}
