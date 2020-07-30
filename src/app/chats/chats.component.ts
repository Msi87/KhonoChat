import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit, AfterViewInit  {
  currentJustify = 'justified';

  @ViewChild('chatbox', {static: false}) chatbox: ElementRef;

  constructor() {
   
   }

   ngAfterViewInit() {
       /* chats auto scrolls after DOM is ready
    HINT * : This message should be called when a new message is sent or received
    */
   setTimeout(() => {
    this._autoScroll()
   }, 2000);
    
    
  }

    _autoScroll() {
    this.chatbox.nativeElement.scroll({
      top: this.chatbox.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
   }

  ngOnInit(): void {
  
  }

}
