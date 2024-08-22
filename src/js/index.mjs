import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

//import { updatePost } from "./api/posts/update.mjs";
//import { createPost } from "./api/posts/create.mjs";
//import { getPost } from "./api/posts/read.mjs";
//import { getPosts } from "./api/posts/read.mjs";
//import { removePost } from "./api/posts/delete.mjs";

//import * as post from "./api/posts/index.mjs";

const path = location.pathname;

console.log(path);

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostFormListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostListener();
}

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplate();

//createPost();
//getPost(3).then(console.log);
//removePost();
//updatePost();
//getPosts();
//getPosts(13015).then(console.log);
