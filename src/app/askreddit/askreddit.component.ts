import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-askreddit',
  templateUrl: './askreddit.component.html',
  styleUrls: ['./askreddit.component.css']
})
export class AskredditComponent {
  @Input() childPostList: Post[];

}
