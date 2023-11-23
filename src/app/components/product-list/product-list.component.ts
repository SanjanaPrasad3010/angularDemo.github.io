import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
 constructor(public dataService: DataService){}
 productList: any[] = [];

 ngOnInit() {
  this.dataService.getAllProducts().subscribe(res => {this.productList = res.products});
 }
}

