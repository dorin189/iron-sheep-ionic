import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ModalController} from "ionic-angular";
import {Profile} from "../profile/profile";


@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit {

    private items;

    constructor(
        private http: HttpClient,
        public modalCtrl: ModalController
    ) {

    }

    ngOnInit(): void {
        this.http.get('http://localhost:3000/api/v1/users').subscribe(
            response => {
                console.log(response);
                this.items = response;
            }
        )
    }

    openModal(obj) {
        console.log(obj);
        let profileModal = this.modalCtrl.create(Profile, {obj:  obj});
        profileModal.present();
    }



}