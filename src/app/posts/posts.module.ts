import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [PostsComponent],
  exports: [PostsComponent],
})
export class PostsContainerComponentModule {}
