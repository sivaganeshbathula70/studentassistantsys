import { Component, OnInit } from '@angular/core';
import { Mentor } from '../Mentor';
import { MentoService } from '../mento.service';

@Component({
  selector: 'app-add-mentor',
  templateUrl: './add-mentor.component.html',
  styleUrls: ['./add-mentor.component.css']
})
export class AddMentorComponent implements OnInit {
  mentor:Mentor = new Mentor();

  constructor(private mentoServive:MentoService) { }

  ngOnInit(): void {
  }

  addMentor(){
    return this.mentoServive.addMentor(this.mentor).subscribe(data=>{
      console.log('mentor data',data);
      localStorage.setItem('mentorId',data.mentorId);
      this.mentor=data
    });

  }

}
