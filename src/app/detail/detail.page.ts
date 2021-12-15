import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public route: ActivatedRoute
  ) {}

  posts = [];

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
        console.log(data.data);
      });
  };

  testing = function () {
    console.log(parseInt(this.route.snapshot.params['id']));
  };
}
