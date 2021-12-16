import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    public as: AppServiceService,
    private storage: Storage,
    public nav: NavController
  ) {}

  profile = [];

  ngOnInit() {
    this.getProfile();
  }

  getProfile = async function () {
    this.token = await this.storage.get('token');
    this.as.getProfile(this.token).subscribe((data) => {
      this.profile = data.msg;
    });
  };

  back = function () {
    this.nav.navigateRoot('');
  };
}
