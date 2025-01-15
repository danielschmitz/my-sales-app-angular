import { Component, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterOutlet } from '@angular/router';
import { Product } from './product.dto';
import { ProductService } from './product.service';
import { Observable, lastValueFrom } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-products',
    imports: [MaterialModule, RouterOutlet],
    templateUrl: './products.component.html',
    styles: ``
})
export class ProductsComponent {

}
