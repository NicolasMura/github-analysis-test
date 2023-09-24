import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { environment } from '@github-analysis-test/environment';
import { RepositoryListComponent } from '@github-analysis-test/repository-list';
import { BehaviorSubject, catchError, debounceTime, from, of, switchMap, tap } from 'rxjs';
import { Octokit } from 'octokit';
import { GetReposResponse } from '@github-analysis-test/models';

@Component({
  selector: 'gat-repository-form',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    RepositoryListComponent
  ],
  templateUrl: './repository-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryFormComponent implements OnInit {
  private nnfb = inject(NonNullableFormBuilder);
  private searchInputRef!: ElementRef;
  @ViewChild('searchInputRef', { static: false }) private set input(searchInputRef: ElementRef) {
    this.searchInputRef = searchInputRef;
  }

  repositories$ = new BehaviorSubject<GetReposResponse['data']['items']>([]);
  isLoading$ = new BehaviorSubject(false);
  octokit = new Octokit({
    auth: environment.octokit.accessToken
  });

  form = this.nnfb.group({
    search: ['']
  });

  ngOnInit(): void {
    this.updateSearchResultsOnSearch();
  }

  updateSearchResultsOnSearch(): void {
    this.form.controls.search.valueChanges
      .pipe(
        tap((query) => {
          this.repositories$.next([]);
          this.isLoading$.next(!!query);
        }),
        debounceTime(300),
        switchMap((query) => {
          if (!query.length) return of({ incomplete_results: true, items: [], total_count: 0 });
          return from(this.searchGithubRepositories(query)).pipe(
            tap((response) => console.log(response.items)),
            catchError(() => {
              return of({ incomplete_results: true, items: [], total_count: 0 });
            }),
          )
        }),
        tap((response) => {
          this.repositories$.next(response.items);
          this.isLoading$.next(false);
        })
      )
      .subscribe();
  }

  async searchGithubRepositories(query: string): Promise<GetReposResponse['data']> {
    const { data } = await this.octokit.request('/search/repositories?q={query}&type={type}', {
        query,
        type: 'repositories',
      });
    return data;
  }

  /**
   * Scan for CTRL / CMD + F events
   */
  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent): void {
    if (($event.ctrlKey || $event.metaKey) && $event.code === 'KeyF') {
      $event.preventDefault(); // to prevent the browser from opening its own default search box
      this.searchInputRef.nativeElement.focus();
    }
  }
}
