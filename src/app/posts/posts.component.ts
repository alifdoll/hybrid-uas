import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppServiceService } from '../app-service.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public token: any = '';
  public id: any = '6';
  posts = [];

  constructor(
    public nav: NavController,
    public as: AppServiceService,
    private storage: Storage,
    private menu: MenuController
  ) {}

  async ngOnInit() {
    this.token = await this.storage.get('token');
    console.log('test token ' + this.token);
    this.as.getAllPosts(this.token).subscribe((data) => {
      this.posts = data.data;
      console.log(data.data);
    });
  }

  editForm = function () {
    this.nav.navigateRoot('edit');
  };

  deletePost = function () {
    window.location.reload();
  };

  detailPost = function () {
    this.nav.navigateRoot('detail');
  };
}
