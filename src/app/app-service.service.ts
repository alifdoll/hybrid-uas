import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient, private storage: Storage) {}

  login = function (username: string, password: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);

    return this.http.post(
      'https://ubaya.fun/hybrid/160419113/uas/auth/login.php',
      body
    );
  };

  register = function (
    name: string,
    username: string,
    password: string
  ): Observable<any> {
    let body = new HttpParams();
    body = body.set('name', name);
    body = body.set('username', username);
    body = body.set('password', password);

    return this.http.post(
      'https://ubaya.fun/hybrid/160419113/uas/auth/register.php',
      body
    );
  };

  getAllPosts = function (token: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('token', token);
    console.log('token di service ' + token);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419113/uas/api/posts/posts.php',
      body
    );
  };

  deletePosts = function (token: string, post_id: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('token', token);
    body = body.set('id', post_id);
    console.log('token di service ' + token);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419113/uas/api/posts/delete.php',
      body
    );
  };

  addPosts = function (
    caption: string,
    content: string,
    token: string
  ): Observable<any> {
    let body = new HttpParams();
    body = body.set('caption', caption);
    body = body.set('content', content);
    body = body.set('token', token);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419113/uas/api/posts/insert.php',
      body
    );
  };

  editPost = function (
    id: string,
    caption: string,
    content: string,
    token: string
  ): Observable<any> {
    let body = new HttpParams();
    body = body.set('caption', caption);
    body = body.set('id', id);
    body = body.set('content', content);
    body = body.set('token', token);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419113/uas/api/posts/edit.php',
      body
    );
  };

  getProfile = function (token: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('token', token);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419113/uas/api/posts/profile.php',
      body
    );
  };

  detailPost = function (post_id: string, token: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('token', token);
    body = body.set('id', post_id);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419113/uas/api/posts/detail.php',
      body
    );
  };

  sendLike = function (post_id: string, token: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('token', token);
    body = body.set('post_id', post_id);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419113/uas/api/posts/likes.php',
      body
    );
  };

  addComment = function (
    token: string,
    post_id: string,
    comment: string
  ): Observable<any> {
    let body = new HttpParams();
    body = body.set('token', token);
    body = body.set('post_id', post_id);
    body = body.set('comment', comment);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419113/uas/api/posts/comments.php',
      body
    );
  };
}
