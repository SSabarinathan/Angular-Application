import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  data:any;

  constructor(private product_data: PagesService ) { }

  ngOnInit(): void {


  }






}
