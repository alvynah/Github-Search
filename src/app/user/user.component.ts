import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from '../user';
import {Repo} from '../repo';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  repo!: Repo;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    interface ApiResponse {
      login: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_at: Date;
      html_url: string;

    }
    // tslint:disable-next-line:max-line-length
    this.http.get<ApiResponse>('https://api.github.com/users/alvynah?acess_token= + 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' ).subscribe(data => {
      // Succesful API request
      this.user = new User(data.login, data.public_repos, data.followers, data.following, data.avatar_url, data.created_at, data.html_url);
    });
    interface Repos {
      name: string;
      description: string;
      html_url: string;
      forks: number;
      watchers_count: number;
      language: string;
      created_at: Date;
    }
    // tslint:disable-next-line:max-line-length
    this.http.get<Repos>('https://api.github.com/repos/alvynah/akanName-website').subscribe(data => {
      // Succesful API request
      // tslint:disable-next-line:max-line-length
      this.repo = new Repo(data.name, data.description, data.html_url, data.forks, data.watchers_count, data.language, data.created_at);
      console.log(Repo);
    });
  }

}
