import { Component, Input } from '@angular/core';
import { ClubActivity } from 'src/app/class/club-activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  @Input() activity!: ClubActivity
}
