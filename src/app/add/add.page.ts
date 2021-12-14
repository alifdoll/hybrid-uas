import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  constructor(
    public nav: NavController,
    public as: AppServiceService,
    private storage: Storage
  ) {}

  ngOnInit() {}

  addPost = async function () {
    this.token = await this.storage.get('token');
    this.as
      .addPosts(this.caption, this.content, this.token)
      .subscribe((data) => {
        this.nav.navigateRoot('');
      });
    this.home();
  };

  back = function () {
    this.nav.navigateRoot('');
  };

  home = function () {
    this.nav.navigateRoot('');
  };
}
