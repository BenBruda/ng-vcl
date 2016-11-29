import { ButtonComponent } from './button.component';

export default {
  name: 'Button',
  path: 'button',
  category: 'Buttons',
  tabs: {
    Demo: ButtonComponent,
    'README.md': require("!raw-loader!../../../src/components/button/README.md"),
    'demo.component.html': require("!raw-loader!./button.component.html"),
    'demo.component.ts': require("!raw-loader!./button.component.ts")
  }
};