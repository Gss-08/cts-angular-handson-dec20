import { Component, Input, OnInit, Output } from '@angular/core';

import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent  {

  @Input()
  clearLike: number | undefined = undefined;
  
  @Input()
  clearDislike: number | undefined = undefined;

 

counter1 : number = 1;
counter2 : number = 1;
  
@Output()
LikeCounter : EventEmitter<number> = new EventEmitter<number>();

@Output()
DislikeCounter : EventEmitter<number> = new EventEmitter<number>();

likeClick(){
  if(this.clearLike == 0){
    this.counter1 = 1;
    this.clearLike = undefined;
  }
  this.LikeCounter.emit(this.counter1++);
}
dislikeClick(){
  if(this.clearDislike == 0){
    this.counter2 = 1;
    this.clearDislike = undefined;
  }
  this.DislikeCounter.emit(this.counter2++);
}


}
