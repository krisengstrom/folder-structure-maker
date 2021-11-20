import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NodeModel } from '../../models/node.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public root: NodeModel = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<NodeModel[]>('assets/data/structure.json').subscribe((response) => {
      this.root = {
        name: '/',
        type: 'folder',
        children: response,
        id: 'root'
      }
    });

  }

  add() {
    this.root.children.push({
      type: 'unset',
      name: '',
      children: [],
      id: '',
      draft: {
        name: '',
        type: 'folder'
      }
    });
  }

  toString() {
    return JSON.stringify(this.root);
  }

}
