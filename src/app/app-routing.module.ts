import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './components/tree/tree.component';


const routes: Routes = [
  {
    path: '', 
    component: TreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
