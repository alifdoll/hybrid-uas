import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  constructor(
    public as: AppServiceService,
    private storage: Storage,
    public route: ActivatedRoute,
    public nav: NavController
  ) {}

  data = [];
  content: string = '';
  caption: string = '';

  ngOnInit() {
    this.detailPostId();
  }

  detailPostId = async function () {
    this.as
      .detailPost(
        parseInt(this.route.snapshot.params['id']),
        await this.storage.get('token')
      )
      .subscribe((data) => {
        // this.data = data;
        this.content = data.data[0].content;
        this.caption = data.data[0].caption;
        console.log(data);
      });
  };

  back = function () {
    this.nav.navigateRoot('');
  };

  editPost = async function () {
    this.as
      .editPost(
        parseInt(this.route.snapshot.params['id']),
        this.caption,
        this.content,
        await this.storage.get('token')
      )
      .subscribe(() => this.nav.navigateRoot(''));
  };
}
