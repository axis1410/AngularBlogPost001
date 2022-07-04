import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BlogserviceService {
    blogURL: string = 'http://localhost:3000/blogPosts';
    constructor(private http: HttpClient) {}

    getAllBlogs() {
        return this.http.get(this.blogURL).subscribe((res) => {
            console.log(res);
        });
    }
}
