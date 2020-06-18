import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  //public postList = postList;
  constructor() { }

  ngOnInit() {
  }


postList = [
  {
    title: 'Título 1',
    subTitle: 'SubTitulo',
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Título 2',
    subTitle: 'SubTitulo',
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Título 3',
    subTitle: 'SubTitulo',
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Título 4',
    subTitle: 'SubTitulo',
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  }
  ]

}
