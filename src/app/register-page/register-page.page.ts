import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {
  constructor(
    public nav: NavController,
    public as: AppServiceService,
    private storage: Storage
  ) {}

  ngOnInit() {}

  register = function () {
    this.as
      .register(this.name, this.username, this.password)
      .subscribe((data) => {
        this.user = data;
        this.nav.navigateRoot('');

        this.token = this.user.token;
        this.storage.set('token', this.token);
      });
    this.loginPage();
  };

  loginPage = function () {
    this.nav.navigateRoot('');
    // window.location.reload();
  };
}
