import { Component, OnInit, Input } from '@angular/core';
import { NodeModel } from '../../models/node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() data: NodeModel = null;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  add() {
    console.log('adding');
    this.data.children.push({
      type: 'unset',
      name: '',
      children: [],
      id: '',
      draft: {
        name: '',
        type: 'file'
      }
    });
  }

  save() {
    if (this.data.draft.name === '') {
      this.delete();
      return;
    }
    this.data.name = this.data.draft.name;
    this.data.type = this.data.draft.type;
    delete this.data.draft;
  }

  delete() {
    this.data = null;
  }

}
