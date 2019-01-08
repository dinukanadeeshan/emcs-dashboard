import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainComponent } from './train/train.component';
import { PredictComponent } from './predict/predict.component';

const routes: Routes = [
  {
    path: '',
  children: [{
    path: 'train',
    component: TrainComponent,
  }, {
    path: 'predict',
    component: PredictComponent,
  }],    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeuralNetworkRoutingModule { }
