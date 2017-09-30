import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // Input() is to access the element property in another component
  @Input('srvElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
