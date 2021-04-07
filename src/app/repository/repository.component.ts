import { Component, OnInit } from '@angular/core';
import { SearchRequestService } from '../search-http/search-request.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
 public  repoName = 'pizza';
  reposByName!: Repo;


  // tslint:disable-next-line:typedef
  searchRepos(username: string) {
    this.repoName = username;
    this.ngOnInit();
    this.repoName = '';
  }
  constructor(public searchService: SearchRequestService) {

  }



  ngOnInit() {
    this.searchService.searchRepos(this.repoName);
    this.reposByName = this.searchService.reposByName;
    console.log(this.reposByName)
 }

}
