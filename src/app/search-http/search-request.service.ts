import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../user';
import { Repo } from '../repo';
@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
  user: User;
  repo: Repo;
  newRepo: any;
  newSearch: any;
  reposByName: Repo;
  arrayData: any;
  reposResult: Repo[];


  constructor(private http: HttpClient) {
    this.user = new User('', 0, 0, 0, '', new Date(), '');
    this.repo = new Repo('', '', '', 0, 0, '', new Date());
    this.reposByName = new Repo('', '', '', 0, 0, '', new Date());
   }
   // tslint:disable-next-line:typedef
   findUser(searchName: string){

     interface ApiResponse {
       login: string;
       public_repos: number;
       followers: number;
       following: number;
       avatar_url: string;
       created_at: Date;
       html_url: string;
   }
     const promise = new Promise((resolve, reject) => {
       this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?acess_token= + ' + environment.myKey).toPromise().then(
         (result) => {
           this.user.login = result.login;
           this.user.repos = result.public_repos;
           this.user.followers = result.followers;
           this.user.following = result.following;
           this.user.profile = result.avatar_url;
           this.user.createdAt = result.created_at;
           this.user.htmlUrl = result.html_url;
           resolve(0);
         },
         (error) => {
           console.log(error);
           reject();
         }
       );
     });
     return promise;
  }
  // tslint:disable-next-line:typedef
  getRepos(searchName: string) {
    interface Repos {
      name: string;
      html_url: string;
      description: string;
      forks: number;
      watchers_count: number;
      language: string;
      created_at: Date;
    }
    const promise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get<Repos>('https://api.github.com/users/' + searchName + '/repos?order=created&sort=asc?acess_token= +' + environment.myKey + 'page=1&per_page=1000').toPromise().then(
        (result) => {
          this.newRepo = result;
          resolve(0);
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    console.log(promise);
    return promise;
  }
  // tslint:disable-next-line:typedef
  searchRepos(repoName) {
    // tslint:disable-next-line:class-name
    interface repobyName {
      name: string;
      html_url: string;
      description: string;
      forks: number;
      watchers_count: number;
      language: string;
      created_at: Date;
    }
    const promise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get<repobyName>('https://api.github.com/search/repositories?q=' + repoName ).toPromise().then(
        (result) => {
          this.reposByName.name = result.name;
          this.reposByName.html_url = result.html_url;
          this.reposByName.description = result.description;
          this.reposByName.forks = result.forks;
          this.reposByName.watchers_count = result.watchers_count;
          this.reposByName.created_at = result.created_at;
          this.reposByName.language = result.language;
          resolve(0);

          this.arrayData = Object.entries(result);
          const repositoryData = this.arrayData[2];
          const convertRepositoryData =
          repositoryData[Object.keys(repositoryData)[1]];
          this.reposResult = convertRepositoryData;

        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    console.log(promise);
    return promise;
}
}
