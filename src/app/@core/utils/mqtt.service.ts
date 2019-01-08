import { Injectable } from '@angular/core';
import * as mqtt from 'mqtt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttService {
  // client: any;
  // constructor() { 
  //   this.client = mqtt.connect('mqtt://192.168.8.104:1883');
  // }

  // subscribeTo(topic: string, callback: Function) {
  //     this.client.subscribe(topic);
  //     this.client.on('message', (t, message)=>{
  //       if(topic === t){
  //         console.log(message.toString());
  //       }
  //     });
  // }
}
