// Libraries
import { Octokit } from '@octokit/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

// Helpers
import { Repository } from './helpers/list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  page = 1;
  showLoadMore = false;
  searchObj = { search: '' };
  apiURL = 'GET /search/repositories';
  repositories: Array<Repository> = [];

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getRepositories();
  }

  async getRepositories(page: number = 1): Promise<void> {
    this.spinner.show();
    if (page === 1) { this.repositories = []; }

    const octokit = new Octokit({ auth: `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` });
    const { data: { items, total_count } } = await octokit.request(this.apiURL, {
      page, q: this.searchObj.search || 'Biztech'
    });
    this.spinner.hide();
    this.repositories = [...this.repositories, ...items];
    if (total_count > this.repositories.length) { this.showLoadMore = true; }
  }

}
