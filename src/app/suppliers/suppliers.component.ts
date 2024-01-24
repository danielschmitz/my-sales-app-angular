import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './suppliers.component.html',
  styles: ``
})
export class SuppliersComponent {

}
