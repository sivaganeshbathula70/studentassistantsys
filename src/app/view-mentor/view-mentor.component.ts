import { Component, OnInit } from '@angular/core';
import { MentoService } from '../mento.service';
import { Mentor } from '../Mentor';

@Component({
  selector: 'app-view-mentor',
  templateUrl: './view-mentor.component.html',
  styleUrls: ['./view-mentor.component.css']
})
export class ViewMentorComponent implements OnInit {
  mentor:Mentor[]=[];

  constructor(private mentoServive:MentoService) { }


  ngOnInit(): void {
    this.mentoServive.loadMentor().subscribe(data=>this.mentor=data);
  }

}
