import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { PostblogsComponent } from './postblogs/postblogs.component';
import { EditblogsComponent } from './editblogs/editblogs.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'postBlogs', component: PostblogsComponent },
    { path: 'editBlogs', component: EditblogsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
})
export class AppRoutingModule {}
