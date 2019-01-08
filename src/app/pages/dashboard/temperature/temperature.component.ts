import { Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {

  temperature = 24;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';

  colors: any;
  themeSubscription: any;

  @Input() tabTitle: string;

  @Input() value: number;
  @Input() external_value: number;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });

  //   this._mqttService.subscribeTo('testTopic', () => {
  //     console.log('%c xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'color:green');
  //     console.log('%c xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'color:green');
  //     console.log('%c xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'color:green');
  //     console.log(`Mqtt client connection status:`);
  //     console.log('%c xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'color:green');
  //     console.log('%c xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'color:green');
  //     console.log('%c xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'color:green');
  // });
  }

  ngOnInit(){
    
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
