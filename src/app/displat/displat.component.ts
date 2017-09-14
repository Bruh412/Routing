import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-displat',
  templateUrl: './displat.component.html',
  styleUrls: ['./displat.component.css']
})
export class DisplatComponent implements OnInit {
  firstName: string;
  lastName: string;

  nameCollection: Array<object>

  constructor(private dataStore: SharedService) { }

  ngOnInit() {
    this.nameCollection = this.dataStore.getNames();
  }

}
