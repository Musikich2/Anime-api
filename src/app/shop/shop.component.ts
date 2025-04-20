import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from '../user-services.service';
import { all } from 'axios';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopComponent {


  public searchResults:any;
  public test:any = [];
  public test2:boolean = false;

  public searchResultsStatus:any;



  public searchbar = this.fb.group({
    name: [''],
    price: ['']
  })

  public searchInput:string = '';


  constructor(private http:UserServicesService, private router: Router,private fb:NonNullableFormBuilder){
    this.http.returnAnime().subscribe((data:any) => {
      this.searchResults = data.data;
      console.log(this.searchResults);
      });

      // this.searchResults.forEach((items:any) => {
      //   if(items.status == 'Finished Airing'){

      //   }
      // });
  }




  searching(){
    this.http.returnAnimeWithSearch(this.searchInput).subscribe((data:any) => {
      let uniqueResults = new Map();
    data.data.forEach((item: any) => {
      if (!uniqueResults.has(item.mal_id)) {
        uniqueResults.set(item.mal_id, item);
      }
    });

    this.searchResults = Array.from(uniqueResults.values());
    console.log(this.searchResults);
    })


    // if(this.searchBar.controls.name.value == ''){
    //   this.test = this.searchResults;
    // } 
    
    // if (this.searchBar.controls.price.value == ''){
    //   this.test = this.searchResults;
    // }


    // if (this.searchBar.controls.name.dirty){

    //   this.test = [];
    //   this.test2 = true;
   
    //   this.searchResults.forEach((item:any) => {
    //     if(item.name.toLowerCase().includes(this.searchBar.controls.name.value)){
    //       this.test.push(item)
    //     }
    //   } )

    // } if (this.searchBar.controls.price.dirty  &&  this.searchBar.controls.price.value !== null){
    //    this.test = [];
    //    this.test2 = true;

    //    this.searchResults.forEach((item:any) => {
    //     if(item.pricePerNight == this.searchBar.controls.price.value){
  
    //         this.test.push(item)
           
    //     }
    //   } )
    //    console.log(this.test)
    //  }  if (this.searchBar.controls.name.dirty && this.searchBar.controls.price.dirty &&  this.searchBar.controls.price.value !== null){
    //    console.log(this.searchBar.controls.price.value)
    //   this.test = [];
    //   this.test2 = true;

    //   this.searchResults.forEach((data:any) => {
    //     if(data.pricePerNight == this.searchBar.controls.price.value && data.name.toLowerCase().includes(this.searchBar.controls.name.value)){
    //       this.test.push(data)
    //       console.log(data)
    //     }
    //   })
    //   console.log(this.test)
    //  }
   }


  navigateToGallery(data:any) { 
     this.router.navigate(['/gallery'],
      { queryParams: { roomInfo: JSON.stringify(data) }}); 
    }
}
