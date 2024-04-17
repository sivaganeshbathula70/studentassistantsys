import { Component, OnInit } from '@angular/core';
import { MentoService } from '../mento.service';
import { WeatherInformation } from '../WeatherInfotrmation';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  weatherInformation!: WeatherInformation;
  constructor(private mentoServive:MentoService) { }

  ngOnInit(): void {
    this.mentoServive.loadWeather().subscribe(data=>this.weatherInformation=data);
  }

}
