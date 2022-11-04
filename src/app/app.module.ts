import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RegisterDirective } from './register.directive';
import { CustomEqualValidatorDirective } from './common/directives/custom-equal-validator.directive';

import { CurrentUser } from './common/services/currentUser.service';
import { LoginService } from './common/services/login.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { PostblogsComponent } from './postblogs/postblogs.component';
import { EditblogsComponent } from './editblogs/editblogs.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ReadBlogsComponent } from './read-blogs/read-blogs.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        RegisterDirective,
        RegisterComponent,
        CustomEqualValidatorDirective,
        HomeComponent,
        UsersListComponent,
        HeaderComponent,
        ReadBlogsComponent,
        PostblogsComponent,
        EditblogsComponent,
    ],
    imports: [
        MatSliderModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [CurrentUser, LoginService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
