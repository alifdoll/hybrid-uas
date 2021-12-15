import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public nav: NavController,
    private menu: MenuController,
    private storage: Storage
  ) {}

  username = '';
  password = '';
  login_error = '';
  token = '';

  async ngOnInit() {
    await this.storage.create();
    this.token = await this.storage.get('token');
  }
  async logout() {
    this.nav.navigateRoot('');
    await this.storage.remove('token');
    window.location.reload();
  }

  home() {
    this.nav.navigateRoot('');
  }
}
