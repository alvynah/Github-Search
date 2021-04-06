import { Component, OnInit } from '@angular/core';
import { SearchRequestService } from '../search-http/search-request.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  public searchName = 'alvynah';

  repo!: Repo;


  constructor(public searchRepo: SearchRequestService) {

  }

  ngOnInit(): void {
    this.searchRepo.getRepos(this.searchName);
    this.repo = this.searchRepo.repo;
  }

}