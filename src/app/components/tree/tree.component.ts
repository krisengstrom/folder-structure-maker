import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
    this.data.getData();
  }

  addToRoot() {
    this.data.root.children.push({
      type: 'unset',
      name: '',
      children: [],
      id: this.data.getId(),
      draft: {
        name: '',
        type: 'folder'
      }
    });
  }
}
