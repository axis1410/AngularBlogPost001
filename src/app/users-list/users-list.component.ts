import { Component, Input, OnInit, Output } from '@angular/core';

import { UserInterface } from '../common/Classes/user.interface';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
