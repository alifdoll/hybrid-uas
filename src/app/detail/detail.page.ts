import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  constructor(
    public as: AppServiceService,
    private storage: Storage,
    public route: ActivatedRoute,
    public nav: NavController
  ) {}

  posts = [];
  comments = [];

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
        this.posts = data.data[0];
        this.comments = this.posts.comments;
        console.log(data.data);
      });
  };

  likePost = async function (id) {
    console.log(id);
    this.as
      .sendLike(id, await this.storage.get('token'))
      .subscribe(() => this.nav.navigateRoot(''));
  };

  addComment = async function (id) {
    console.log(id);
    this.as
      .addComment(await this.storage.get('token'), id, this.comment)
      .subscribe(() => this.nav.navigateRoot(''));
  };

  back = function () {
    this.nav.navigateRoot('');
  };
}
