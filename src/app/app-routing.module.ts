import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent} from './user/user.component';
import {RepositoryComponent} from './repository/repository.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'repo', component: RepositoryComponent},
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
