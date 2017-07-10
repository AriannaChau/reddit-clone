import { Component } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Epicodus Tunes';

  powerAbusePostList: Post[] = [
    new Post('zonnebloemetje', 4675, 3, 'I was at a completely empty airport, and only needed to identify myself before I could pick up my luggage. There was no queue, so "I skipped the line". That asshole at the desk made me walk back and compelled me to zigzag all around the fences, where nobody was standing. Afterwards, he and a colleague just laughed at me, because he knew that he could use his power like that. Ugh.'),
    new Post('Choactapus', 616, 3, 'I had a coworker who cheated when she played games with three year olds. When the kids called her out on it she would deny it and say that she was a teacher and whatever she did was allowed in the game. Her entire self esteem seemed to be dependent on winning games designed for preschoolers.'),
    new Post('Dingobob', 4145, 4, 'Im an idiot bah bah booey bah bah booey howard sterns penis bah bah booey.'),
    new Post('Scott55e', 3456, 4, 'We had a pizza party for people who completed a project at work. I was training a new guy and brought leftovers so I wasnt interested in pizza. The new guy was about to take lunch and I told him if he wanted a couple slices of pizza he could have mine. Lol the guy who ran the pizza party said no way even after explaining to him I wasnt eating, and he hid the leftover pizza in his office. "Only people who worked on this project are allowed to eat the pizza". I went into his office and grabbed it and gave it to my guy.'),
    ];

}
