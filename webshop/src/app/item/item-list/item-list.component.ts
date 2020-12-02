import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
 products = [
   { title: "Tere või 82%", category: "Piimatoode",
    price: 1.49, imgSrc: "https://ecoop.ee/media/cache/db/1f/95672-tere-voi-82-200g-01d1.png" },
   { title: "Tere või 82%", category: "Piimatoode",
   price: 1.49, imgSrc: "https://ecoop.ee/media/cache/db/1f/95672-tere-voi-82-200g-01d1.png" },
   { title: "Tere või 82%", category: "Piimatoode",
   price: 1.49, imgSrc: "https://ecoop.ee/media/cache/db/1f/95672-tere-voi-82-200g-01d1.png" },
   { title: "Tere või 82%", category: "Piimatoode",
   price: 1.49, imgSrc: "https://ecoop.ee/media/cache/db/1f/95672-tere-voi-82-200g-01d1.png" },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
