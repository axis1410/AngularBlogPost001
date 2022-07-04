import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BlogserviceService } from './../common/services/blogservice.service';
import { LoginService } from './../common/services/login.service';

@Component({
    selector: 'app-editblogs',
    templateUrl: './editblogs.component.html',
    styleUrls: ['./editblogs.component.scss'],
})
export class EditblogsComponent implements OnInit {
    allBlogs: any;
    currentUser: any = [];
    blogURL: string = 'http://localhost:3000/blogPosts';
    modifiedBlogContent: any;

    constructor(
        private http: HttpClient,
        private loginService: LoginService,
        private blogService: BlogserviceService
    ) {}

    ngOnInit(): void {
        this.http.get(this.blogURL).subscribe(
            (data) => {
                this.allBlogs = data as string[];
                console.log(this.allBlogs);
            },
            (err: HttpErrorResponse) => {
                console.log(err.message);
            }
        );
        const loggedInUser = this.loginService.list('http://localhost:3000/currentUser/1').subscribe(
            (response) => {
                this.currentUser = response;
                console.log(`Current user : ${this.currentUser.username}`);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    editBlog(blogID: number) {
        console.log('Editing blog with id : ', blogID);
        this.modifiedBlogContent = (<HTMLInputElement>document.getElementById('blog-content')).value;

        this.http.patch(`${this.blogURL}/${blogID}`, { blogContent: this.modifiedBlogContent }).subscribe(
            (res) => {
                console.log(`Patch call successful, response : ${res}`);
                alert('Blog Edited Successfully');
            },
            (err: HttpErrorResponse) => {
                console.log(err.message);
            }
        );
    }

    deleteBlog(blogID: number) {
        console.log('Deleting blog with id : ', blogID);
        this.http.delete(`${this.blogURL}/${blogID}`).subscribe(
            (res) => {
                console.log(`Delete call successful, response : ${res}`);
                alert('Blog Deleted Successfully');
                this.ngOnInit();
            },
            (err: HttpErrorResponse) => {
                console.log(err.message);
            }
        );
    }
}
