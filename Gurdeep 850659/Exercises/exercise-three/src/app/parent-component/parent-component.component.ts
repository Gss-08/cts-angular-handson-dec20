import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {

 likes : number | undefined = undefined;
 dislikes : number | undefined = undefined;

 handleClear(){
   this.likes = 0;
   this.dislikes = 0;
 }
}
