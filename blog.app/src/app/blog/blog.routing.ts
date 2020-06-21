import { PostlistComponent } from './posts/list/postlist.component';
import { Route } from "@angular/router";
import { BlogGuard } from './guards/blogGuards';

export const BlogRounting: Route[] = [
  {path: 'blog', children: [
    {path: 'list', component: PostlistComponent, canActivate: [BlogGuard]}
  ]}
]
