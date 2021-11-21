import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { NodeModel } from '../../models/node.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() data: NodeModel = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.data);
  }

  add() {
    console.log('adding');
    this.data.children.push({
      type: 'unset',
      name: '',
      children: [],
      id: this.dataService.getId(),
      draft: {
        name: '',
        type: 'file'
      }
    });
    console.log(this.data);
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
