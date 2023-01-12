import { Component} from '@angular/core';
// import { PagesService } from './pages.service';
import { Mobile, Laptop } from './pages.interface';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  // providers: [PagesService]

})
export class PagesComponent implements OnInit {
  title= 'e-shopping-application';
  mobile:Array<Mobile>=[];
  laptop:Array<Laptop>=[];


  constructor( ) { }
  // constructor( private collection: PagesService) { }


  ngOnInit(): void {
    // this.collection.getMobile().subscribe({

    //   next: (res: any) => {
    //     this.data = res;
    //     console.log(this.data);
    //   }
    // });

  }

}
