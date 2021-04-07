import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { SearchRequestService } from '../search-http/search-request.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
 searchName='alvynah';
 user!:User;
 repo!:Repo;
  // tslint:disable-next-line:typedef
  findUser(username: string) {
    this.searchName = username;
    this.ngOnInit();
  }
  // tslint:disable-next-line:typedef
  getRepos(username: string) {
    this.searchName = username;
    this.ngOnInit();
  }
  
  constructor(public searchRepo: SearchRequestService, public searchRequst: SearchRequestService) {

  }

  ngOnInit(): void {
    this.searchRequst.findUser(this.searchName);
    this.user = this.searchRequst.user;
    this.searchRepo.getRepos(this.searchName);
    this.repo = this.searchRepo.repo;
  }


}
