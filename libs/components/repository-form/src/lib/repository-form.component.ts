import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OctokitService } from '@github-analysis-test/api-sdk';
import { Repository } from '@github-analysis-test/models';
import { RepositoryListComponent } from '@github-analysis-test/repository-list';
import {
  RepositoriesStateSelectors,
  RepositoriesStateSetters,
} from '@github-analysis-test/state';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  from,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'gat-repository-form',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    RepositoryListComponent,
  ],
  templateUrl: './repository-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryFormComponent implements OnInit {
  private octokitService = inject(OctokitService);
  private nnfb = inject(NonNullableFormBuilder);
  private searchInputRef!: ElementRef;
  @ViewChild('searchInputRef', { static: false }) private set input(
    searchInputRef: ElementRef,
  ) {
    this.searchInputRef = searchInputRef;
  }

  repositoriesStateSelectors = inject(RepositoriesStateSelectors);
  repositoriesStateSetters = inject(RepositoriesStateSetters);
  repositories$ = new BehaviorSubject<Repository[]>([]);
  isLoading$ = new BehaviorSubject(false);

  form = this.nnfb.group({
    search: [''],
  });

  ngOnInit(): void {
    this.form.patchValue({
      search: this.repositoriesStateSelectors.getSearch(),
    });

    // if (this.form.controls.search) {
    //   this.repositories$.next(this.repositoriesStateSelectors.repositories$);
    // }

    this.updateSearchResultsOnSearch();
  }

  updateSearchResultsOnSearch(): void {
    this.form.controls.search.valueChanges
      .pipe(
        tap((query) => {
          this.repositories$.next([]);
          this.isLoading$.next(!!query);
          this.repositoriesStateSetters.setSearch(query);
          if (!query.length) this.repositoriesStateSetters.setRepositories([]);
        }),
        debounceTime(300),
        switchMap((query) => {
          if (!query.length) return of([]);
          return from(this.octokitService.searchGithubRepositories(query)).pipe(
            catchError(() => {
              return of([]);
            }),
          );
        }),
        tap((response) => {
          console.log(response);
          this.repositories$.next(response);
          this.isLoading$.next(false);
        }),
      )
      .subscribe();
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
