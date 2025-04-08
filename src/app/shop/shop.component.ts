import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopComponent {


  public allRoomInfo:any;
  public test:any = [];
  public test2:boolean = false;

  searchBar = this.fb.group({
    name:['', Validators.maxLength(100)],
    price:['', Validators.max(999)]
  })


  constructor(private http:UserServicesService,private router: Router,private fb:NonNullableFormBuilder){
    this.http.returnAnime().subscribe((data:any) => {
      this.allRoomInfo = data;
    })
  }


  searching(){

    if(this.searchBar.controls.name.value == ''){
      this.test = this.allRoomInfo;
    } if (this.searchBar.controls.price.value == ''){
      this.test = this.allRoomInfo;
    }


    if (this.searchBar.controls.name.dirty){

      this.test = [];
      this.test2 = true;
   
      this.allRoomInfo.forEach((item:any) => {
        if(item.name.toLowerCase().includes(this.searchBar.controls.name.value)){
          this.test.push(item)
        }
      } )

    } if (this.searchBar.controls.price.dirty  &&  this.searchBar.controls.price.value !== null){
       this.test = [];
       this.test2 = true;

       this.allRoomInfo.forEach((item:any) => {
        if(item.pricePerNight == this.searchBar.controls.price.value){
  
            this.test.push(item)
           
        }
      } )
       console.log(this.test)
     }  if (this.searchBar.controls.name.dirty && this.searchBar.controls.price.dirty &&  this.searchBar.controls.price.value !== null){
       console.log(this.searchBar.controls.price.value)
      this.test = [];
      this.test2 = true;

      this.allRoomInfo.forEach((data:any) => {
        if(data.pricePerNight == this.searchBar.controls.price.value && data.name.toLowerCase().includes(this.searchBar.controls.name.value)){
          this.test.push(data)
          console.log(data)
        }
      })
      console.log(this.test)
     }
   }


  navigateToGallery(data:any) { 
     this.router.navigate(['/gallery'],
      { queryParams: { roomInfo: JSON.stringify(data) }}); 
    }
}
