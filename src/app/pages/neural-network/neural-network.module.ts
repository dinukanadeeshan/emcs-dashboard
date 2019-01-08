import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';


import { NeuralNetworkRoutingModule } from './neural-network-routing.module';
import { TrainComponent } from './train/train.component';
import { PredictComponent } from './predict/predict.component';
import { ThemeModule } from '../../@theme/theme.module';
import { EchartsLineComponent } from './train/echarts-line.component';

@NgModule({
  imports: [
    CommonModule,
    NeuralNetworkRoutingModule,
    ThemeModule,
    NgxEchartsModule
  ],
  declarations: [TrainComponent, PredictComponent, EchartsLineComponent]
})
export class NeuralNetworkModule { }
