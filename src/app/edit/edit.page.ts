import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  constructor(private nav: NavController) {}

  ngOnInit() {}

  back = function () {
    this.nav.navigateRoot('');
  };
}
