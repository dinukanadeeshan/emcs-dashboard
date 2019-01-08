import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import { LiveService } from '../../@core/data/live.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

  temperature: number;
  humidity: number;

  fanCard: CardSettings = {
    title: 'Exhaust Fan',
    iconClass: 'ion-log-out',
    type: 'primary',
  };
  humidifierCard: CardSettings = {
    title: 'Humidifier',
    iconClass: 'nb-drops',
    type: 'success',
  };
  lightCard: CardSettings = {
    title: 'Lights',
    iconClass: 'nb-lightbulb',
    type: 'info',
  };
  intakeFanCard: CardSettings = {
    title: 'Intake Fan',
    iconClass: 'ion-log-in',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.fanCard,
    this.intakeFanCard,
    this.lightCard,
    this.humidifierCard
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.intakeFanCard,
        type: 'primary',
      },
      {
        ...this.fanCard,
        type: 'danger',
      },
      {
        ...this.humidifierCard,
        type: 'secondary',
      },
    ],
  };

  constructor(private themeService: NbThemeService, private liveService: LiveService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });
  }

  ngOnInit(){
    setInterval(()=>{
      this.liveService.getLiveData().subscribe(data=>{
        this.temperature = data.temperature;
        this.humidity = data.humidity;
      });
    }, 5000);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
