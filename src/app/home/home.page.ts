import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public token: any = '';
  posts = [];

  constructor(
    public nav: NavController,
    public as: AppServiceService,
    private storage: Storage,
    private http: HttpClient,
    private menu: MenuController
  ) {}

  async ngOnInit() {
    this.token = await this.storage.get('token');
    console.log('test token ' + this.token);
    this.as.getAllPosts(this.token).subscribe((data) => {
      this.posts = data;
      console.log(data);
    });
  }

  addForm = function () {
    this.nav.navigateRoot('add');
  };
}
