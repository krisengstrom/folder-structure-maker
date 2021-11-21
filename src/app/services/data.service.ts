import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public root: NodeModel = null;

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get<NodeModel[]>('assets/data/structure.json').subscribe((response) => {
      this.root = {
        name: '/',
        type: 'folder',
        children: response,
        id: 'root'
      }
    });
  }

  toString() {
    return JSON.stringify(this.root);
  }

  getId(): string {
    return String(Math.ceil(Math.random() * 10000));
  }

}
