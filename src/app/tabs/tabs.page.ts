import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(
    public as: AppServiceService,
    private nav: NavController,
    private storage: Storage
  ) {}

  public token: any = '';

  login = function () {
    this.as.login(this.username, this.password).subscribe((data) => {
      this.user = data;
      console.log(this.user.token);
      this.nav.navigateRoot('');

      this.token = this.user.token;
      this.storage.set('token', this.token);

      console.log(this.token);
    });
  };

  async ngOnInit() {
    this.token = await this.storage.get('token');
  }

  registerPage = function () {
    this.nav.navigateRoot('register');
  };
}
