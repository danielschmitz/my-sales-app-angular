import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

interface MenuItem {
   /**
   * The path that will be loaded when you click on the menu
   */
   path: string;
   /**
    * The text that will be displayed in the menu
    */
   label: string;
}

@Component({
    selector: 'app-menu',
    imports: [MatListModule],
    template: `
   @for (item of menuItems; track item.path) {
        <a mat-list-item [href]="item.path">{{item.label}}</a>
      }
  `,
    styles: ``
})
export class MenuComponent {
  menuItems: Array<MenuItem> = [
    {
      path: '',
      label: 'Home'
    },
    {
      path: 'categories',
      label: 'Categories'
    },
    {
      path: 'suppliers',
      label: 'Suppliers'
    },
  ]
}
