import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-http/search-request.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    public searchName = 'alvynah';

  user!: User;
  repo!: Repo;

  constructor(public searchRepo: SearchRequestService, public searchRequst: SearchRequestService) {

  }

  ngOnInit(): void {
  this.searchRequst.findUser(this.searchName);
  this.user = this.searchRequst.user;
  this.searchRepo.getRepos(this.searchName);
  this.repo = this.searchRepo.repo;

  }

}
