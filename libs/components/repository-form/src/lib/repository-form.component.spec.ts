import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RepositoryFormComponent } from './repository-form.component';

describe('RepositoryFormComponent', () => {
  let component: RepositoryFormComponent;
  let fixture: ComponentFixture<RepositoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoryFormComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
