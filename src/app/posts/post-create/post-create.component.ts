import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {

  private mode = 'create';
  private postId: string;

  constructor(public postsService: PostsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId'))  {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onAddPost(postTitle: HTMLTextAreaElement, postBody: HTMLTextAreaElement) {
    this.postsService.addPost(postTitle.value, postBody.value);
  }
}
