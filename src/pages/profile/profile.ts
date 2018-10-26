import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class Profile {

    protected data;
    constructor(params: NavParams, private http: HttpClient) {
        console.log(params.get('obj'));
        let a = params.get('obj');

        this.data = a;
    }

    save(res) {
        console.log(res);
        let userId = res.id;
        let data = {
            "first_name": res.first_name,
            "last_name": res.last_name,
            "user_name": res.user_name,
            "email": res.email,
            "password": res.password
        }
        this.http.put('http://localhost:3000/api/v1/users/' + userId, data).subscribe(
            response => {
                console.log(response);

            }
        )
    }

}